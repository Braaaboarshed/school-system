import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:any = new Subject()
  constructor(private http :HttpClient) { }

  login(model :any){
   return  this.http.put(environment.baseApi+'login/1',model)
  }
  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }


}
