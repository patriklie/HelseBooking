import { LockKeyhole, ArrowBigRight, Mail, Eye, EyeOff, EyeClosed } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useAppStore } from "../store/authStore.js";
import { useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import Maskott from "../assets/Maskott_lion_no_bg.png"
import LoginPerson from "../assets/freepik__background__69816.png";

const LoginPage = () => {

  const [epost, setEpost] = useState("");
  const [passord, setPassord] = useState("");
  const setToken = useAppStore((state) => state.setToken);
  const setUsername = useAppStore((state) => state.setUsername);
  const setEmail = useAppStore((state) => state.setEmail);
  const setRole = useAppStore((state) => state.setRole);
  const setAuth = useAppStore((state) => state.setIsAuth);
  const setTypeBehandler = useAppStore((state) => state.setTypeBehandler);
  const setProfilbilde = useAppStore((state) => state.setProfilbilde);
  const setOmBehandler = useAppStore((state) => state.setOmBehandler);
  const navigate = useNavigate();
  const [visPassord, setVisPassord] = useState(false);
  const PassordIkon = visPassord ? Eye : EyeClosed;

  const loginRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      email: epost,
      password: passord
      })

      console.log("Dette får jeg tilbake ved login: ", response);
      toast.success(`Hei ${response.data.username} 👋`);
      
      setToken(response.data.token);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setRole(response.data.role);
      setProfilbilde(response.data.profilbilde);
      setOmBehandler(response.data.omBehandler);
      setAuth(true);
      setTypeBehandler(response.data.typeBehandler || "");
      navigate("/profil");

    } catch (error) {
      console.error(error.response.data);
      toast.error(error.response.data.message);
}


  }

  return (
    <>
      <div className="margin-klassen">
        
        <img src={LoginPerson} alt="login" className="login-person" />
        
        <form onSubmit={loginRequest} className="form-container" >
          
          <div className="input-container">
            <Mail className="input-icon" size={18} color="grey" strokeWidth={1.5} />
            <input type="email" onChange={(e) => setEpost(e.target.value)} value={epost} id="epost" placeholder="din@epost.no" required />
          </div>
          
          <div className="input-container">
            <LockKeyhole className="input-icon" size={18} color="grey" strokeWidth={1.5} />
            <input type={ visPassord ? "text" : "password"} onChange={(e) => setPassord(e.target.value)} value={passord} id="passord" placeholder="Passord" required />
            <PassordIkon className="input-icon-right" size={18} strokeWidth={1.5} onClick={() => setVisPassord(!visPassord)} />
          </div>
          <div className="form-no-bruker">Har du ikke bruker? Registrer <Link to="/register">her</Link></div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 17 }}
            type="submit"
            className="logginn-btn">
            Logg inn <ArrowBigRight fill="white" stroke="none" size={20} />
          </motion.button>

      </form>
      </div>
    </>
  )
}

export default LoginPage