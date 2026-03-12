import { useAppStore } from "../store/authStore.js";
import { useState } from "react";


const LoginPage = () => {

  const [brukernavn, setBrukernavn] = useState("");
  const setUsername = useAppStore((state) => state.setUsername);

  const changeUsername = (e) => {
    setBrukernavn(e.target.value);
  }

  return (
    <>
      <div className="max-w-sm mx-auto px-4">Endre brukernavn
        <input onChange={changeUsername} className=" w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"></input>
       
        <button onClick={() => setUsername(brukernavn)} className="cursor-pointer hover:bg-amber-500 my-2 w-full mx-auto bg-amber-400 p-2 border-amber-200 border-2">Endre brukernavn</button>
      </div>
    </>
  )
}

export default LoginPage