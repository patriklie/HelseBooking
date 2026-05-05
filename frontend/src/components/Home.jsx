import { useAppStore } from "../store/authStore.js";
import LoginPage from "../pages/LoginPage.jsx";
import Profil from "../pages/Profil.jsx";

const Home = () => {
    const isAuth = useAppStore((state) => state.isAuth);
    return isAuth ? <Profil /> : <LoginPage />;
}

export default Home;