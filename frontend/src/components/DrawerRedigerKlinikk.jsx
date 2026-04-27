import { motion, useTransform, useMotionValue, animate } from "motion/react"
import { useEffect, useState } from "react";
import axios from "axios";
import { Hospital, Map } from "lucide-react";
import { useAppStore } from "../store/authStore";
import toast from "react-hot-toast";
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import {
    GeoapifyContext,
    GeoapifyGeocoderAutocomplete
} from '@geoapify/react-geocoder-autocomplete';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FlyttKart } from "./FlyttKart";
import L from "leaflet";



const DrawerRedigerKlinikk = ({ klinikk: klinikkData, closeDrawer, oppdaterKlinikker, slettKlinikk }) => {
    
    const y = useMotionValue(0);
    const swipeAvstand = 150;
    const overlayOpacity = useTransform(y, [0, swipeAvstand], [1, 0]);
    const token = useAppStore((state) => state.token);
    const [resetKey, setResetKey] = useState(0);
    const [klinikk, setKlinikk] = useState({
        navn: klinikkData.navn,
        adresse: klinikkData.adresse,
        latitude: klinikkData.latitude,
        longitude: klinikkData.longitude,
        behandlere: klinikkData.behandlere
    })
    const customIcon = L.icon({
    iconUrl: "/HelseBooking_32.png",
    iconSize: [32, 32],   
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
    });
    
    const handleClose = () => {
        animate(y, window.innerHeight, {
            type: "tween",
            duration: 0.25,
            ease: "easeIn",
            onComplete: closeDrawer
        })
    }
    
    useEffect(() => {
        y.set(window.innerHeight);
        animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
    }, []);
    
    const handleKlinikk = (e) => {
        setKlinikk({ ...klinikk, [e.target.name]: e.target.value })
    }
    
    const handleSlett = async () => {
        await slettKlinikk(klinikkData._id);
        handleClose();
    }

    const oppdaterKlinikk = async (e) => {
        e.preventDefault();

        try {
            console.log(klinikk)
            console.log(klinikkData._id)
            const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/klinikk/${klinikkData._id}`, klinikk, {
                headers: { Authorization: `Bearer ${token}` }
            })
            setResetKey((prev) => prev + 1);
            oppdaterKlinikker();
            handleClose();
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "Noe gikk galt ved redigering av klinikk");
        }
    }

    const onPlaceSelected = (feature) => {
        if (!feature) return
        setKlinikk((prev) => ({
            ...prev,
            adresse: feature.properties.formatted,
            latitude: feature.properties.lat,
            longitude: feature.properties.lon
        }))
    };
    
     
    return (
    <>
        <motion.div
            className="rediger-klinikk-drawer-overlay"
            onClick={handleClose}
            style={{ opacity: overlayOpacity }}
        >
                
        </motion.div>
            
        <motion.div
            className="rediger-klinikk-drawer-panel"
            drag="y"
            style={{ y }}
            dragElastic={0.1}
            dragConstraints={{ top: 0 }}
            onDragEnd={(e, info) => {
                if (info.offset.y > swipeAvstand || info.velocity.y > 800) {
                    handleClose();
                } else {
                    animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
                }
            }}
            
            >
            <div className="rediger-klinikk-drawer-drag-wrapper">
                <div className="rediger-klinikk-drawer-drag"></div>
            </div>

            <form className="rediger-klinikk-form-container" onSubmit={oppdaterKlinikk}>

                <div className="rediger-klinikk-input-container">
                    <label htmlFor="navn">Klinikknavn</label>
                    <div className="rediger-klinikk-input-wrapper">
                        <Hospital className="rediger-klinikk-input-icon" size={18} color="grey" strokeWidth={1.5} />
                        <input type="text" value={klinikk.navn} onChange={handleKlinikk} id="navn" name="navn" placeholder="Klinikknavn" required />
                    </div>
                </div>

                <div className="rediger-klinikk-input-container">
                    <label htmlFor="dato">Adresse</label>
                    <div className="rediger-klinikk-input-wrapper">
                        <Map className="rediger-klinikk-input-icon" size={18} color="grey" strokeWidth={1.5} />
                        <GeoapifyContext apiKey={import.meta.env.VITE_GEOAPIFY_API_KEY}>
                            <GeoapifyGeocoderAutocomplete
                                placeholder={klinikkData.adresse}
                                lang="no"
                                key={resetKey}
                                limit={8}
                                addDetails={true}
                                placeSelect={onPlaceSelected}
                            />
                        </GeoapifyContext>

                    </div>
                </div>


                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 17 }}
                type="submit"
                className="rediger-klinikk-btn">
                    <div>Oppdater Klinikk</div>
                    <Hospital strokeWidth={1.5} size={20} />
                </motion.button>
                    
                    <motion.button
                        type="button"
                        className="slett-klinikk-btn"
                        onClick={handleSlett}
                    >
                    Slett klinikk
                    </motion.button>    

                </form>
                
                <MapContainer
                    center={[klinikk.latitude, klinikk.longitude]}
                    attributionControl={false} /* Denne legger jeg til true eller fjerner ved prodsetting  */
                    zoom={15}
                    className="rediger-klinikk-map-container"
                    zoomControl={false}
                    dragging={false}
                    scrollWheelZoom={false}
                    doubleClickZoom={false}
                    touchZoom={false}
                    >
                    <TileLayer
                        /* url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" */ /* Denne var kaldere også fin */
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    /* attribution='&copy; <a href="https://carto.com/">CARTO</a>' AKTIVER attribution linken i prodsetting */
                    />
                    <Marker position={[klinikk.latitude, klinikk.longitude]} icon={customIcon}>
                        <Popup>
                            <div style={{ fontWeight: "600" }}>{klinikk.navn}</div>
                            <div>{klinikk.adresse}</div>
                        </Popup>
                    </Marker>
                    <FlyttKart latitude={klinikk.latitude} longitude={klinikk.longitude} zoom={15} />
                </MapContainer>
                
            </motion.div>
            

    </>

  )
}

export default DrawerRedigerKlinikk;