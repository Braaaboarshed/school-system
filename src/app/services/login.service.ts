import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userSubject = new BehaviorSubject<any>(this.getUserFromLocalStorage())
  public userObservable :Observable<any> ;
  User:any
  user:any = new Subject()
  constructor(private http :HttpClient) {
    this.userObservable = this.userSubject.asObservable()

   }

  login(model :any){
   return  this.http.put(environment.baseApi+'login/1',model)
  }
  getAdmin(){
    return this.http.get(environment.baseApi+'teacher')
  }
   setUserToLocalStorage(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

   get currentUser(){
    return this.userSubject.value
  }

 getUserFromLocalStorage(){

    const userJson = localStorage.getItem('user')
    if(userJson) return JSON.parse(userJson)
  }

}
