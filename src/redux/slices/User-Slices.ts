import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserDataType } from "../../lib/data";

interface UsersState {
	users: UserDataType[];
	loading: boolean;
	error: string | null;
	filters: {
		name: string;
		username: string;
		email: string;
		phone: string;
	};
}

const initialState: UsersState = {
	users: [],
	loading: false,
	error: null,
	filters: {
		name: "",
		username: "",
		email: "",
		phone: "",
	},
};

export const fetchUsers = createAsyncThunk<UserDataType[]>(
	"users/fetchUsers",
	async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	},
);

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.filters = { ...state.filters, ...action.payload };
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Failed to fetch users";
			});
	},
});

export const { setFilter } = usersSlice.actions;

export default usersSlice.reducer;
