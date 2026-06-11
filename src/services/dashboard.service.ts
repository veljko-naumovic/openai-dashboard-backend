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

export function getDashboardStats(): DashboardStats {
	return {
		totalRequests: 12450,
		totalTokens: 845000,
		totalCost: 142.82,
		averageResponseTime: 1.4,
	};
}

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
