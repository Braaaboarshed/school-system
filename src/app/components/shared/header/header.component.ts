import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any
  auth:any
  constructor(
     private service :LoginService,
     private router :Router
     ) { }

  ngOnInit(): void {
    this.service.userObservable.subscribe(res=>{
      this.user = res[0].name
      console.log(res)
    })
  }
  logout(){
    localStorage.removeItem('user')
    this.service.userSubject.next(null)
    this.router.navigate(['../'])
    location.reload()

  }

}
