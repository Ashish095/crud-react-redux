import { User } from "./model";

export interface StoreState {
    userState: UserState;
}

export interface UserState {
    user: Array<User>;
}

export * from './model';

export const FIREBASE_REQUEST = 'FIREBASE_REQUEST';
export type FIREBASE_REQUEST = typeof FIREBASE_REQUEST;