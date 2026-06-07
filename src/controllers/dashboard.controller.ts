import { Request, Response } from "express";

import { getDashboardStats } from "../services/dashboard.service";

export function getStats(req: Request, res: Response) {
	const stats = getDashboardStats();

	res.json(stats);
}
