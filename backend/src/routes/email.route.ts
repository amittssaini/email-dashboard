import { Router } from "express";
import { scheduleEmail } from "../controllers/email.controller"

const router = Router();

// POST /api/email/schedule
router.post("/schedule", scheduleEmail);

export default router;
