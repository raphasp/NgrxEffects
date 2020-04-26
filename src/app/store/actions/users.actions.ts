import { createAction, props } from '@ngrx/store';
import { UserClass } from 'src/app/models/user.model';

export const loadUser = createAction('[User] LoadUser');
export const loadUserSuccess = createAction(
    '[User] Load User Success',
    props<{users: UserClass[]}>()
);

export const loadUserError = createAction(
    '[User] Load User Error',
    props<{payload: any}>()
);

