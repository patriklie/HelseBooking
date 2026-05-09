import { motion, useTransform, useMotionValue, animate } from "motion/react"
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppStore } from "../store/authStore";
import toast from "react-hot-toast";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Calendar1 } from "lucide-react";

const DrawerPasientTime = ({ closeDrawer, time, avlysTime }) => {
    
    const y = useMotionValue(0);
    const swipeAvstand = 150;
    const overlayOpacity = useTransform(y, [0, swipeAvstand], [1, 0]);
    const token = useAppStore((state) => state.token);
    const brukernavn = useAppStore((state) => state.username);
    const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${time.klinikk.latitude},${time.klinikk.longitude}`;
    
    
    const roundIcon = time.behandler.profilbilde?.replace(
        "/upload/",
        "/upload/w_50,h_50,c_fill,r_max/"
    );
    
    const customIcon = L.icon({
        iconUrl: roundIcon,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25]
    });
    
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleEscape);

        return () => window.removeEventListener("keydown", handleEscape);
    }, []);
    
    const formatDato = (datoString) => {
        const date = new Date(datoString);
        return new Intl.DateTimeFormat("no-NO", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(date);
    };
    
    const handleClose = () => {
        animate(y, window.innerHeight, {
            type: "tween",
            duration: 0.25,
            ease: "easeIn",
            onComplete: closeDrawer
        })
    }
    
    const mailTekstBehandler = `mailto:${time.behandler.email}?subject=Angående time ${formatDato(time.dato)} kl. ${time.startTid}`;
    
    useEffect(() => {
        y.set(window.innerHeight);
        animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
    }, []);    
     
    
    return (
    <>
        <motion.div className="pasienttime-drawer-overlay" onClick={handleClose} style={{ opacity: overlayOpacity }}></motion.div>
            
        <motion.div
            className="pasienttime-drawer-panel"
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
            <div className="pasienttime-drawer-drag-wrapper">
                <div className="pasienttime-drawer-drag"></div>
            </div>
            
                <div  className="pasienttime-info-container">
                    <div className="pasienttime-left">Pasient</div>
                    <div className="pasienttime-right">{brukernavn}</div>
                    <div className="pasienttime-left">Behandler</div>
                    <div className="pasienttime-right"><a className="pasienttime-behandler-link" href={mailTekstBehandler} target="_blank" rel="noopener noreferrer"> {time.behandler.username}</a></div>
                    <div className="pasienttime-left">Type</div>
                    <div className="pasienttime-right pasienttime-storbokstav">{time.behandler.typeBehandler}time</div>
                    <div className="pasienttime-left">Pris</div>
                    <div className="pasienttime-right">{time.pris},-</div>
                    <div className="pasienttime-left">Dato</div>
                    <div className="pasienttime-right">{formatDato(time.dato)}</div>
                    <div className="pasienttime-left">Tid</div>
                    <div className="pasienttime-right">{time.startTid} - {time.sluttTid}</div>
                    <div className="pasienttime-left">Klinikk</div>
                    <div className="pasienttime-right">{time.klinikk.navn}</div>
                    <div className="pasienttime-left">Adresse</div>
                    <div className="pasienttime-right"><a className="pasienttime-google-link" href={googleMapsLink} target="_blank" rel="noopener noreferrer">{time.klinikk.adresse}</a></div>
                </div>
           
            
            <div onPointerDownCapture={(e) => e.stopPropagation()} style={{ width: "100%"}}>
                <MapContainer
                    center={[time.klinikk.latitude, time.klinikk.longitude]}
                    attributionControl={false} /* Denne setter jeg til true eller fjerner ved prodsetting  */
                    zoom={15}
                    className="pasienttime-klinikk-map-container"
                    zoomControl={false}
                    dragging={true}
                    scrollWheelZoom={true}
                    doubleClickZoom={true}
                    touchZoom={true}
                    >
                    <TileLayer
                    /* url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" */ /* Denne var kaldere også fin */
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    /* attribution='&copy; <a href="https://carto.com/">CARTO</a>' AKTIVER attribution linken i prodsetting */
                    />
                    <Marker position={[time.klinikk.latitude, time.klinikk.longitude]} icon={customIcon}>
                        <Popup>
                            <div style={{ fontWeight: "600" }}>{time.klinikk.navn}</div>
                            <div>{time.klinikk.adresse}</div>
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>
                
                <div className="pasienttime-avlys-btn" onClick={async () => { await avlysTime(time._id); handleClose(); }}>Avlys time</div>

           
                
              
            </motion.div>
            

    </>

  )
}

export default DrawerPasientTime;