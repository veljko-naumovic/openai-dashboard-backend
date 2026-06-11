import { Router } from "express";

import { getStats, getUsage } from "../controllers/dashboard.controller";
import { getModels } from "../controllers/dashboard.controller";

const router = Router();

router.get("/stats", getStats);
router.get("/models", getModels);
router.get("/usage", getUsage);

export default router;
