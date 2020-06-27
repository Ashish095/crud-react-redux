import { combineReducers } from "redux";

import { StoreState } from "../types/index";
import { userState } from "./userState"

export const INITIAL_STATE: StoreState = {
    userState: { user: [] }
};

export const rootReducer = combineReducers<StoreState>({
    userState
});