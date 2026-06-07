import express from "express";
import cors from "cors";

import dashboardRoutes from "./routes/dashboard.routes";

const app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
	}),
);

app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);

export default app;
