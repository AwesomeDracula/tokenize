import {
	IMarketSummaryResponse,
	IMarketSummaryValue,
} from '@/types/data/market.data';

export const normalizeMarketSummariesData = (
	data: IMarketSummaryResponse[],
) => {
	return data.reduce((object, item) => {
		const value = {
			lastPrice: item.lastPrice,
			prevPrice: item.prevPrice,
		};

		if (item.marketId) {
			// eslint-disable-next-line no-param-reassign
			object[item.marketId] = value;
		}

		return object;
	}, {} as Record<string, IMarketSummaryValue>);
};
