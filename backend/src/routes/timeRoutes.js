import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { verifyRoleMiddleware } from "../middleware/verifyRoleMiddleware.js";
import { validateIdMiddleware } from "../middleware/validateIdMiddleware.js";
import {
    hentLedigeTimer,
    opprettTime,
    hentMineTimer,
    hentBehandlerTimer,
    bookTime,
    avlysTime,
    slettTime,
    hentValgtBehandlerTimer,
    endreTime
} from "../controllers/timeControllers.js"

const router = express.Router();

// denne vil returnere alle ledige timer for pasient
router.get("/", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("pasient", "behandler"), hentLedigeTimer);

// dennne vil opprette en tilgjengelig timeavtale kun av rollen behandler som kan bookes
router.post("/", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler", "admin"), opprettTime);

// her endrer vi en time for behandlere
router.patch("/:id/endretime", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler", "admin"), endreTime);

// henter alle timer for pasient
router.get("/pasienttimer", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("pasient"), hentMineTimer);

// hent alle timer for innlogget behandler
router.get("/behandlerTimer", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler"), hentBehandlerTimer);

// hent alle timer for valgt behandler (pasient som booker dette her)
router.get("/behandler/:behandlerId", authMiddleware, validateIdMiddleware, hentValgtBehandlerTimer);

// book time av rolle pasient.
router.patch("/:id/book",authMiddleware, validateIdMiddleware, verifyRoleMiddleware("pasient"), bookTime);

// avlys time av rollen behandler/pasient
router.patch("/:id/avlys", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("pasient", "behandler"), avlysTime);

// slett opprettet time av behandler
router.delete("/:id", authMiddleware, validateIdMiddleware, verifyRoleMiddleware("behandler"), slettTime);

export default router;