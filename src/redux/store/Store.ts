import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../slices/User-Slices";

export const store = configureStore({
	reducer: {
		users: usersSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
