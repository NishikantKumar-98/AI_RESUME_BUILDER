import express from "express";
import protect from "../middlewares/authMiddleware.js"
import { enhanceJobDescription, enhanceProfesssionalSummary, uploadResume } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post('/enhance-pro-sum', protect , enhanceProfesssionalSummary)
aiRouter.post('/enhance-job-desc', protect , enhanceJobDescription)
aiRouter.post('/upload-resume', protect , uploadResume)

export default aiRouter