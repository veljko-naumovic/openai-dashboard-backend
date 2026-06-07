import { Router } from "express";

import { getStats } from "../controllers/dashboard.controller";
import { getModels } from "../controllers/dashboard.controller";

const router = Router();

router.get("/stats", getStats);
router.get("/models", getModels);

export default router;
