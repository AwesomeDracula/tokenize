/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBaseMarketData {
	id: number;
	marketId: string | null;
	marketName: string | null;
	baseCurrency: string | null;
	marketCurrency: string;
	marketCurrencyLong: string;
	ceiling: string | null;
	floor: string | null;
	baseIncrement: string | null;
	quoteIncrement: string | null;
	baseMinSize: string | null;
	baseMaxSize: string | null;
	tradingStatus: string | null;
	listRoles?: any;
	baseCurrencyTruncate: number;
	priceTruncate: number;
	quoteCurrencyTruncate: number;
}

export interface IBaseMarket {
	title: string;
	list: IBaseMarketData[];
}

export interface IMarketSummaryResponse {
	marketId: number;
	market: string;
	askPrice?: number | null;
	bidPrice?: number | null;
	lastPrice: number | null;
	openPrice?: number | null;
	prevPrice: number | null;
	high?: number | null;
	low?: number | null;
	listRoles?: any[] | null;
}

export interface IMarketSummaryValue {
	lastPrice: number | null;
	prevPrice: number | null;
}

export interface IMarketSummary {
	[key: number]: IMarketSummaryValue;
}
