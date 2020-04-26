import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://reqres.in/api';

  constructor(
    private _httpClient:HttpClient
  ) { }
  
  getUser= (): Observable<any> => {
    return this._httpClient.get(`${this.url}/users?per_page=6&delay=3`)
            .pipe(
              map(resp =>{
                  return resp['data']
              })
            );
  }

  getOneUser= ( id:string ): Observable<any> => {
    return this._httpClient.get(`${this.url}/users/${id}`)
            .pipe(
              map(resp =>{
                  return resp['data']
              })
            );
  }

}
