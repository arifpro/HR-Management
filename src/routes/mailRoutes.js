import express from "express";
const router = express.Router();
import { sendMail } from "../controllers/emailControllers.js";

router.post("/send", sendMail);

export default router;
