import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserClass } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as UsersActions from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  userslist: UserClass[] = []; 
  loading: boolean = true;
  error: any;
  constructor(
    private _storeRedux: Store<AppState>
  ) { }

  ngOnInit() {
    this._storeRedux.select('users').subscribe( ({ users, loading, error }) => {
      console.log('datauser', users);
      this.userslist = users;
      this.loading = loading;
      this.error = error;
    });
    this._storeRedux.dispatch(UsersActions.loadUser());
    // this._userService.getUser()
    //     .subscribe( data => {
    //         this.userslist = data;
    //     });
  }

}
