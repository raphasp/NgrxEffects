import { createAction, props } from '@ngrx/store';
import { UserClass } from 'src/app/models/user.model';

export const loadOneUser = createAction(
    '[User] Load One User',
    props<{ id: string }>()
);
export const loadOneUserSuccess = createAction(
    '[User] Load One User Success',
    props<{ user: UserClass }>()
);

export const loadOneUserError = createAction(
    '[User] Load One User Error',
    props<{payload: any}>()
);

