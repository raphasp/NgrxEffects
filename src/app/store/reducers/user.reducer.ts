import { createReducer, on } from '@ngrx/store';
import * as ActionsUsers from '../actions';
import { UserClass } from 'src/app/models/user.model';


export interface UserState {
    id: string
    user: UserClass,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userInitialState: UserState ={
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _userReducer = createReducer(userInitialState,
    on(ActionsUsers.loadOneUser, (state, { id } ) => ({
        ...state,
        id: id,
         loading:true
    })),

    on(ActionsUsers.loadOneUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: {... user}
    })),
    
    on(ActionsUsers.loadOneUserError, (state, { payload }) => ({
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

export function UserReducer(state, action){
    return _userReducer(state, action);
}

