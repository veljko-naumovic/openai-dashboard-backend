import { Request, Response } from "express";

import { getDashboardStats } from "../services/dashboard.service";
import { getModelsUsage } from "../services/dashboard.service";

export function getStats(req: Request, res: Response) {
	const stats = getDashboardStats();

	res.json(stats);
}

export function getModels(req: Request, res: Response) {
	const models = getModelsUsage();

	res.json(models);
}
