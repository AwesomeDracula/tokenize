import { z } from 'zod';

export const marketSummariesSchema = z.object({
	marketId: z.number(),
	market: z.string(),
	askPrice: z.number().optional().nullable(),
	bidPrice: z.number().optional().nullable(),
	lastPrice: z.number().nullable(),
	openPrice: z.number().optional().nullable(),
	prevPrice: z.number().nullable(),
	high: z.number().optional().nullable(),
	low: z.number().optional().nullable(),
	volumn: z.number().optional().nullable(),
	listRoles: z.any().optional().nullable(),
});

export const marketSummariesResponseSchema = z.object({
	status: z.string(),
	message: z.string(),
	data: z.array(marketSummariesSchema),
});
