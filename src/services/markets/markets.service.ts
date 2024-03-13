import { instance } from '@/services/instance';
import { marketSummariesResponseSchema } from '@/types/schemas/marketSumaries';
import { marketResponseSchema } from '@/types/schemas/markets';

export const getMarketSummaries = async () => {
	const response = await instance.get('public/v1/market/get-summaries').json();
	return marketSummariesResponseSchema.parse(response);
};

export const getMarkets = async () => {
	const response = await instance.get('mobile-api/market/getmarkets').json();
	return marketResponseSchema.parse(response);
};
