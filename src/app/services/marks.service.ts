import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http:HttpClient) { }


  addMarks(studentId:any,marks:any){
    marks.push({studentId:studentId})
    return this.http.post('http://localhost:3000/marks',marks)
  }

  getMark(){
    return this.http.get(environment.baseApi+'marks')
  }
  getStudentMark(markId:any){
    return this.http.get(environment.baseApi+'marks/studentId')
  }
}
