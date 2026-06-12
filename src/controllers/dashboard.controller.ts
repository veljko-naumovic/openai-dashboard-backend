import { Request, Response } from "express";

import { getApiUsage, getDashboardStats } from "../services/dashboard.service";
import { getModelsUsage } from "../services/dashboard.service";
import { asyncHandler } from "../utils/asyncHandler";

export const getStats = asyncHandler(async (req, res) => {
	const range = (req.query.range as string) || "7d";

	const stats = getDashboardStats(range);

	res.json(stats);
});

export const getModels = asyncHandler(async (req: Request, res: Response) => {
	const models = getModelsUsage();

	res.json(models);
});

export const getUsage = asyncHandler(async (req, res) => {
	res.json(getApiUsage());
});
