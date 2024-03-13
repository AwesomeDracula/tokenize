import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserData, loginService } from '@/services/auth/auth.service';

export const login = createAsyncThunk(
	'auth/login',
	async (
		{ email, password }: { email: string; password: string },
		thunkAPI,
	) => {
		try {
			const data = await loginService(email, password);
			return { user: data };
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export interface AuthState {
	isLoggedIn: boolean;
	user?: IUserData;
}

const initialState: AuthState = {
	isLoggedIn: false,
	user: undefined,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user.data;
		});
		builder.addCase(login.rejected, state => {
			state.isLoggedIn = false;
			state.user = undefined;
		});
	},
});

const { reducer } = authSlice;
export default reducer;
