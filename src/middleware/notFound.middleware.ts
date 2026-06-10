import { Request, Response, NextFunction } from "express";

export function notFoundMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	res.status(404).json({
		message: "Route not found",
		path: req.originalUrl,
	});
}
