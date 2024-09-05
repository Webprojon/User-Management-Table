import { thunk } from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../reducer/Reducer";

const store = createStore(
	userReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
