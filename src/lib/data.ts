export interface UserDataType {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
}

export interface UserState {
	loading: boolean;
	users: UserDataType[];
	error: string | null;
}
