import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  goToUser = (id: string):void => {
    console.log(id);
    if(!id){
      return;
    }
    this._router.navigate(['usuario',id]);
  }

}
