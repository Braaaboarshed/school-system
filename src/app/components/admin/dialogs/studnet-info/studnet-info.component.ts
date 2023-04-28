import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-studnet-info',
  templateUrl: './studnet-info.component.html',
  styleUrls: ['./studnet-info.component.css']
})
export class StudnetInfoComponent implements OnInit {
id:any
students:any
targetStudent:any
  constructor(private route :ActivatedRoute,
    private router:Router,
    private service :StudentsService,
    private http :HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,

    ) { }

  ngOnInit(): void {
    this.getSingleStudent()
    console.log(this.data.name)
    this.id = this.data.name
    this.router.navigate([this.data.name])

  }

  getSingleStudent(){
    this.http.get(environment.baseApi+'students').subscribe(res=>{
      this.students = res
      this.targetStudent = this.students.find(((student:any) =>student.id === this .id))
      
    })
  }
}
