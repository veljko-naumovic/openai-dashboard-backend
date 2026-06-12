export type DashboardStats = {
	totalRequests: number;
	totalTokens: number;
	totalCost: number;
	averageResponseTime: number;
};

export type ModelUsage = {
	model: string;
	requests: number;
};

export type ApiUsage = {
	model: string;
	requests: number;
	tokens: number;
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

export function getApiUsage(): ApiUsage[] {
	return [
		{
			model: "GPT-4o",
			requests: 1200,
			tokens: 180000,
		},
		{
			model: "GPT-4.1",
			requests: 400,
			tokens: 62000,
		},
		{
			model: "GPT-4o-mini",
			requests: 1800,
			tokens: 95000,
		},
	];
}

export function getDashboardStats(range: string) {
	switch (range) {
		case "30d":
			return {
				totalRequests: 52800,
				totalTokens: 3200000,
				totalCost: 584.22,
				averageResponseTime: 1.2,
			};

		case "90d":
			return {
				totalRequests: 154000,
				totalTokens: 9200000,
				totalCost: 1640.35,
				averageResponseTime: 1.1,
			};

		default:
			return {
				totalRequests: 12450,
				totalTokens: 845000,
				totalCost: 142.82,
				averageResponseTime: 1.4,
			};
	}
}
