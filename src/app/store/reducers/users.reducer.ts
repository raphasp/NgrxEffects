import { createReducer, on } from '@ngrx/store';
import * as ActionsUsers from '../actions';
import { UserClass } from 'src/app/models/user.model';


export interface UsersState {
   users: UserClass[],
   loaded: boolean,
   loading: boolean,
   error: any
}

export const usersInitialState: UsersState ={
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usersReducer = createReducer(usersInitialState,
    on(ActionsUsers.loadUser, state => ({...state, loading:true})),

    on(ActionsUsers.loadUserSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [... users]
    })),
    
    on(ActionsUsers.loadUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);

export function UsersReducer(state, action){
    return _usersReducer(state, action);
}

