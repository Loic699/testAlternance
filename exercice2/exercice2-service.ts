import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './model/user';
import  * as util from './utils';
 @Injectable({
   provideIn: 'root',
 })
 export class Exercice2Service{

  constructor(private http: HttpClient,) {}

    getData(link: string): Observable<User[]> {
        let obs: Observable<any> = this.http.get(link);
        let treatment = (data: User []) => {
          data.forEach((user:User) => {
            user.setAge(user.getAge() +1)
          })
          return data ;
        };
        return obs.pipe(map(treatment));
      }
      
}