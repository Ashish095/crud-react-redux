import { UserState } from "../types";
import { INITIAL_STATE } from ".";
import { UserAction, ADD_USER } from "../actions/UserAction";

export const userState = (state: UserState = INITIAL_STATE.userState, action: UserAction):
    UserState => {
    console.log('In Reducer===>>', action.type);
    console.log('In Reducer User===>>', action.user);
    switch (action.type) { 
        case ADD_USER: { 
            console.log('In Type');
            return { ...state, user: [...state.user, action.user] };
        }
        default: return state;
    }
}