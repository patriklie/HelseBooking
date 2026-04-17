import axios from "axios";
import { useEffect, useState } from "react";

const AboutBehandlere = () => {
    
    const [alleBehandlere, setAlleBehandlere] = useState([]);
    
    const getAlleBehandlerePublic = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/behandlere/public`);
            setAlleBehandlere(response.data);
        } catch (error) {
            console.error(error.response?.data?.message);
        }
    }
    
    useEffect(() => {
        getAlleBehandlerePublic();
    }, [])
    
  return (
      <>
          
          <div className="about-behandlere-grid-wrapper">
            <div className="about-behandlere-overskrift" >Møt fagpersonene</div>
            <div className="about-behandlere-grid">
          
            {
                alleBehandlere.slice(0, 6).map((behandler) => {
                    return (
                        <div className="about-behandlere-grid-celle" key={behandler._id}>
                            <div className="about-behandlere-profilbilde-wrapper">
                                <img className="about-behandlere-profilbilde" src={behandler.profilbilde} ></img>
                            </div>
                            <div className="about-behandlere-navn">{behandler.username}</div>
                            <div className="about-behandlere-type">{behandler.typeBehandler}</div>
                            
                        </div>
                    )
                })
            }
          
          
            </div>
        </div>
      </>
  )
}

export default AboutBehandlere