import { useEffect, useState } from "react";
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import DrawerOpprettKlinikk from "../components/DrawerOpprettKlinikk.jsx";
import { Hospital } from "lucide-react";
import axios from "axios";
import { useAppStore } from "../store/authStore.js";
import KlinikkKort from "../components/KlinikkKort.jsx";
import toast from "react-hot-toast";

const Klinikk = () => {
  
  const [showOpprettKlinikkDrawer, setShowOpprettKlinikkDrawer] = useState(false);
  const [klinikker, setKlinikker] = useState([]);
  const token = useAppStore((state) => state.token);
  
  const hentAlleKlinikker = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/klinikk`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }) 
      setKlinikker(response.data);
      
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  }
  
  const slettKlinikk = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/klinikk/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      hentAlleKlinikker()
      toast.success(response?.data?.message)
      
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  }
  
  useEffect(() => {
    hentAlleKlinikker();
  }, [])
  
  const openDrawer = () => {
    console.log("Åpner drawer for opprett klinikk")
    setShowOpprettKlinikkDrawer(true);
  }
  
  const closeDrawer = () => {
    console.log("Lukker drawer for opprett klinikk");
    setShowOpprettKlinikkDrawer(false);
  }

    return (
      <>
        <div className="opprett-klinikk-btn" onClick={openDrawer}>
          <div>Opprett Klinikk</div>
          <Hospital size={ 50 } strokeWidth={1} />
        </div>
        
        
        {klinikker.map((klinikk) => {
          return <KlinikkKort key={klinikk._id} klinikk={klinikk} slettKlinikk={slettKlinikk} />
        })}
        
        {showOpprettKlinikkDrawer && 
          <DrawerOpprettKlinikk closeDrawer={closeDrawer} oppdaterKlinikker={hentAlleKlinikker} />
        }
        
      </>

    )
  }

  export default Klinikk;