import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http:HttpClient) { }


  addMarks(student:any,id:any,marks:any){
    student.marks = marks
    return this.http.put('http://localhost:3000/students/'+id,student)
  }

  getMark(){
    return this.http.get(environment.baseApi+'marks')
  }
  getStudentMark(){
    return this.http.get(environment.baseApi+'students')
  }
}
