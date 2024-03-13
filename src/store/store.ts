import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import marketReducer from './slices/marketSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		market: marketReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
