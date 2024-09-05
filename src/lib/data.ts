export interface UserDataType {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: number;
}

export interface UserState {
	loading: boolean;
	users: UserDataType[];
	error: string | null;
}

export const fetch_users_request = "FETCH_USERS_REQUEST";
export const fetch_users_success = "FETCH_USERS_SUCCESS";
export const fetch_users_failure = "FETCH_USERS_FAILURE";

interface FetchUsersRequestAction {
	type: typeof fetch_users_request;
}

interface FetchUsersSuccessAction {
	type: typeof fetch_users_success;
	payload: UserDataType[];
}

interface FetchUsersFailureAction {
	type: typeof fetch_users_failure;
	payload: string;
}

export type UserActionTypes =
	| FetchUsersRequestAction
	| FetchUsersSuccessAction
	| FetchUsersFailureAction;
