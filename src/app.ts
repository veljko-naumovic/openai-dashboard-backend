import express from "express";
import cors from "cors";

import dashboardRoutes from "./routes/dashboard.routes";
import { errorMiddleware } from "./middleware/error.middleware";
import { notFoundMiddleware } from "./middleware/notFound.middleware";

const app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
	}),
);

app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
