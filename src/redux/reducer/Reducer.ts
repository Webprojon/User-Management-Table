import {
	fetch_users_failure,
	fetch_users_request,
	fetch_users_success,
	UserActionTypes,
	UserState,
} from "../../lib/data";

const initialState: UserState = {
	loading: false,
	users: [],
	error: null,
};

const userReducer = (
	state = initialState,
	action: UserActionTypes,
): UserState => {
	switch (action.type) {
		case fetch_users_request:
			return {
				...state,
				loading: true,
			};
		case fetch_users_success:
			return {
				loading: false,
				users: action.payload,
				error: null,
			};
		case fetch_users_failure:
			return {
				loading: false,
				users: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
