import { createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


export const store= createStore(reducers, {}, applyMiddleware(thunk));

export type AppDispatch = ThunkDispatch<typeof store.dispatch , void, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store;