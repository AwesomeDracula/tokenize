import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
	getMarketSummaries,
	getMarkets,
} from '@/services/markets/markets.service';
import { IBaseMarket, IMarketSummary } from '@/types/data/market.data';
import { normalizeMarketSummariesData } from '@/utilities/normalize';

export const getMarketsApi = createAsyncThunk(
	'markets/market',
	async (_, thunkAPI) => {
		try {
			const data = await getMarkets();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const getMarketSummaryApi = createAsyncThunk(
	'markets/marketSummary',
	async (_, thunkAPI) => {
		try {
			const data = await getMarketSummaries();
			return normalizeMarketSummariesData(data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export interface MarketState {
	baseMarkets: IBaseMarket[];
	marketSummaries: IMarketSummary;
	activeMarket: string;
}

const initialState: MarketState = {
	baseMarkets: [],
	marketSummaries: {},
	activeMarket: '',
};

const marketSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateActiveMarket: (state, action: PayloadAction<string>) => {
			state.activeMarket = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(getMarketsApi.fulfilled, (state, action) => {
			state.baseMarkets = action.payload.data;
			if (action.payload.data.length > 0) {
				state.activeMarket = action.payload.data[0].title;
			}
		});
		builder.addCase(getMarketsApi.rejected, state => {
			state.baseMarkets = [...state.baseMarkets];
		});
		builder.addCase(getMarketSummaryApi.fulfilled, (state, action) => {
			state.marketSummaries = action.payload;
		});
		builder.addCase(getMarketSummaryApi.rejected, state => {
			state.marketSummaries = { ...state.marketSummaries };
		});
	},
});

export const { updateActiveMarket } = marketSlice.actions;
const { reducer } = marketSlice;
export default reducer;
