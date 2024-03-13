import { z } from 'zod';

export const marketDetailSchema = z.object({
	id: z.number(),
	marketId: z.string(),
	marketName: z.string().nullable(),
	baseCurrency: z.string().nullable(),
	marketCurrency: z.string(),
	marketCurrencyLong: z.string(),
	ceiling: z.string().nullable(),
	floor: z.string().nullable(),
	baseIncrement: z.string().nullable(),
	quoteIncrement: z.string().nullable(),
	baseMinSize: z.string().nullable(),
	baseMaxSize: z.string().nullable(),
	tradingStatus: z.string().nullable(),
	listRoles: z.any().nullable(),
	baseCurrencyTruncate: z.number(),
	priceTruncate: z.number(),
	quoteCurrencyTruncate: z.number(),
});

export const marketDataSchema = z.object({
	title: z.string(),
	list: z.array(marketDetailSchema),
});

export const marketResponseSchema = z.object({
	status: z.string(),
	message: z.string(),
	data: z.array(marketDataSchema),
});
