import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { verifyRoleMiddleware } from "../middleware/verifyRoleMiddleware.js";
import { validateIdMiddleware } from "../middleware/validateIdMiddleware.js";
import { hentAlleKlinikker, opprettKlinikk, slettKlinikk } from "../controllers/klinikkController.js";

const router = express.Router();

router.post("/", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler", "admin"), opprettKlinikk);
router.get("/", authMiddleware, validateIdMiddleware, hentAlleKlinikker);
router.delete("/:id", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler", "admin"), slettKlinikk);

export default router;