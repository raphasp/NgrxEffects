import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { loadOneUser } from 'src/app/store/actions';
import { UserClass } from 'src/app/models/user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  user: UserClass = {
    avatar: 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg',
    first_name: '',
    last_name: '',
    email: '',
    id: 0
  };
  constructor(
    private routerActivated: ActivatedRoute,
    private _storeRedux: Store<AppState>
  ) { }

  ngOnInit() {

    this._storeRedux.select('user').subscribe( ({user}) =>{
        this.user = user;
    });

    this.routerActivated.params.subscribe( ({id}) => {
        this._storeRedux.dispatch(loadOneUser({id: id}));
    });
  }

}
