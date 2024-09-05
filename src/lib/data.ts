export interface UserDataType {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
}

export interface UsersState {
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
