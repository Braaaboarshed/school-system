import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(sidebar:HTMLElement){
    // icon.classList.toggle('active')
    sidebar.classList.toggle("active")

  }

  reSize(){
    // document.querySelector('content')
    document.body.className = 'any'
  }
  open(navbar :HTMLElement){
    navbar.classList.toggle("active")
  }

}
