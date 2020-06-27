import { Dispatch } from "redux";
import { User } from "../types/model";
import firebase from "../firebase";

export const ADD_USER = 'ADD_USER';
export type ADD_USER = typeof ADD_USER;

interface AddUser {
    type: ADD_USER;
    user: User;
}

export function addUser(user: User): AddUser {
    console.log('In Action');
    return {
        type: ADD_USER,
        user
    };
}

export const addUserOnFirebase = (user: User) => {
    return async (dispatch: Dispatch<AddUser>) => {
        console.log('addUserOnFirebase====>', user);
        const response = await firebase.firestore().collection('/user').add(user);
        // show loader while request is procesing
        if (!response) {
            return; // TODO show error toast or msg;
        }
        dispatch(addUser({...user, id: response.id}));
    }
}

export type UserAction = AddUser;