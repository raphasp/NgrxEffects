import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import * as UsersActions from '../actions';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private _userService: UserService
    ){}

    loadOneUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(UsersActions.loadOneUser),
            tap( data => {console.log('effect tap', data)} ),
            mergeMap(
                ( action ) => this._userService.getOneUser(action.id)
                    .pipe(
                        //tap( data => {console.log('get user Effect', data)} ) to see the information
                        map( datauser => UsersActions.loadOneUserSuccess( {user: datauser } )),
                        catchError( error => of(UsersActions.loadOneUserError({payload: error})))
                    )
            )
        )
    );
    
}