import { Request, Response } from "express";

import { getDashboardStats } from "../services/dashboard.service";
import { getModelsUsage } from "../services/dashboard.service";
import { asyncHandler } from "../utils/asyncHandler";

export const getStats = asyncHandler(async (req, res) => {
	const stats = getDashboardStats();

	res.json(stats);
});

export const getModels = asyncHandler(async (req: Request, res: Response) => {
	const models = getModelsUsage();

	res.json(models);
});
