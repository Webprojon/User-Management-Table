import { Dispatch } from "redux";
import {
	fetch_users_failure,
	fetch_users_request,
	fetch_users_success,
	UserActionTypes,
	UserDataType,
} from "../../lib/data";

export const fetchUsersRequest = (): UserActionTypes => ({
	type: fetch_users_request,
});

export const fetchUsersSuccess = (users: UserDataType[]): UserActionTypes => ({
	type: fetch_users_success,
	payload: users,
});

export const fetchUsersFailure = (error: string): UserActionTypes => ({
	type: fetch_users_failure,
	payload: error,
});

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserActionTypes>) => {
		dispatch(fetchUsersRequest());
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users",
			);
			const data: UserDataType[] = await response.json();
			dispatch(fetchUsersSuccess(data));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(fetchUsersFailure(error.message));
			} else {
				dispatch(fetchUsersFailure("An unknown error occurred"));
			}
		}
	};
};
