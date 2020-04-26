import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import * as UsersActions from '../actions';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private _userService: UserService
    ){}

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(UsersActions.loadUser),
            tap( data => {console.log('effect tap', data)} ),
            mergeMap(
                () => this._userService.getUser()
                    .pipe(
                        //tap( data => {console.log('get user Effect', data)} ) to see the information
                        map( datausers => UsersActions.loadUserSuccess( {users: datausers } )),
                        catchError( error => of(UsersActions.loadUserError({payload: error})))
                    )
            )
        )
    );
    
}