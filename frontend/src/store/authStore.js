import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

export const useAppStore = create(
    devtools(
        persist(
            (set) => ({
                token: null,
                id: "",
                isAuth: false,
                username: "",
                email: "",
                role: "",
                omBehandler: "",
                typeBehandler: "",
                profilbilde: "",
                setIsAuth: (bool) => set({ isAuth: bool }),
                setUsername: (newUsername) => set({ username: newUsername }),
                setEmail: (newEmail) => set({ email: newEmail }),
                setRole: (newRole) => set({ role: newRole }),
                setOmBehandler: (nyTekst) => set({ omBehandler: nyTekst }),
                setToken: (newToken) => set({ token: newToken }),
                setTypeBehandler: (nyTypeBehandler) => set({ typeBehandler: nyTypeBehandler }),
                setProfilbilde: (nyttProfilbilde) => set({ profilbilde: nyttProfilbilde }),
                setProfil: (nyProfil) => set({ ...nyProfil }),
                logout: () => set({
                    token: null,
                    id: "",
                    isAuth: false,
                    username: "",
                    email: "",
                    role: "",
                    typeBehandler: "",
                    profilbilde: "",
                    omBehandler: "",
                }),
            }),
            { name: "app-store" }
        )
    )
);

export const useProfile = () => useAppStore(useShallow((state) => ({
    username: state.username,
    email: state.email,
    role: state.role,
    typeBehandler: state.typeBehandler,
    omBehandler: state.omBehandler,
})));