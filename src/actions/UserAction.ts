import { Dispatch } from "redux";
import { User } from "../types/model";
import firebase from "../firebase";

// GET USER START

export const GET_USER = 'GET_USER';
export type GET_USER = typeof GET_USER;

interface GetUser {
    type: GET_USER;
    user: Array<User>;
}

export function getUser(user: Array<User>): GetUser {
    return {
        type: GET_USER,
        user
    };
}
// GET USER END

export const ADD_USER = 'ADD_USER';
export type ADD_USER = typeof ADD_USER;

interface AddUser {
    type: ADD_USER;
    user: User;
}

export function addUser(user: User): AddUser {
    return {
        type: ADD_USER,
        user
    };
}

// Firebase Calls

export const addUserOnFirebase = (user: User) => {
    return async (dispatch: Dispatch<AddUser>) => {
        const response = await firebase.firestore().collection('/user').add(user);
        // show loader while request is procesing
        if (!response) {
            return; // TODO show error toast or msg;
        }
        dispatch(addUser({ ...user, id: response.id }));
    }
}

export const getUserFromFirebase = () => {
    return async (dispatch: Dispatch<GetUser>) => {
        const usersFromFirebase = await firebase.firestore().collection('/user').get();
        const users: User[] = usersFromFirebase.docs.map(doc => {
            const data = doc.data() as User;
            return { ...data, id: doc.id };
        });
        dispatch(getUser(users));
    }
}

export type UserAction = AddUser | GetUser;