import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { verifyRoleMiddleware } from "../middleware/verifyRoleMiddleware.js";
import { validateIdMiddleware } from "../middleware/validateIdMiddleware.js";
import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    uploadProfilePicture,
    deleteProfilePicture,
    getAlleBehandlere,
    getAlleBehandlerePublic,
    hentAllePasienter,
    getAlleBehandlereEnkel,
    sjekkBrukernavn
} from "../controllers/userController.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/sjekk/brukernavn", sjekkBrukernavn)
router.get("/behandlere/public", getAlleBehandlerePublic); // til about siden krever ikke auth eller token
router.get("/behandlere/enkel", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler", "admin"), getAlleBehandlereEnkel);
router.get("/behandlere", authMiddleware, getAlleBehandlere);
router.get("/pasienter", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler", "admin"), hentAllePasienter);
router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById); // legg til protection her så ikke alle kan hente brukere
router.patch("/", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);
router.post("/profilbilde", authMiddleware, upload.single("profilbilde"), uploadProfilePicture);
router.delete("/profilbilde", authMiddleware, deleteProfilePicture);

export default router;