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
