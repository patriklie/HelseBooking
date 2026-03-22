import { useAppStore } from "../store/authStore.js";
import defaultAvatar from "../assets/Profile_avatar_placeholder_large.png";
import { useRef } from "react";

const ProfileCard = ({ profilbildeKlikk }) => {
    
    const profilbilde = useAppStore((state) => state.profilbilde);
    const inputField = useRef();
    
    const handleOnChangeProfile = async (e) => {
        await profilbildeKlikk(e);
        inputField.current.value = "";
    }
    
    return (
    <>
        <div className="profile-container">
                <img onClick={() => inputField.current.click()} src={profilbilde || defaultAvatar} alt="profilbilde" />
                <input type="file" ref={inputField} style={{ display: "none" }} onChange={handleOnChangeProfile} />
        
                
        </div>
    </>
  )
}

export default ProfileCard