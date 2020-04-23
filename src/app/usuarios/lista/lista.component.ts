import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserClass } from 'src/app/models/user.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  userslist: UserClass[] = []; 
  constructor(
    public _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.getUser()
        .subscribe( data => {
            this.userslist = data;
        });
  }

}
