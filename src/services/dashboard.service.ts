export type DashboardStats = {
	totalRequests: number;
	totalTokens: number;
	totalCost: number;
	averageResponseTime: number;
};

export function getDashboardStats(): DashboardStats {
	return {
		totalRequests: 12450,
		totalTokens: 845000,
		totalCost: 142.82,
		averageResponseTime: 1.4,
	};
}

export type ModelUsage = {
	model: string;
	requests: number;
};

export function getModelsUsage(): ModelUsage[] {
	return [
		{
			model: "gpt-4o",
			requests: 8200,
		},
		{
			model: "gpt-4.1",
			requests: 4300,
		},
		{
			model: "gpt-4o-mini",
			requests: 12500,
		},
	];
}
