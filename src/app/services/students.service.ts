import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
students:any
  constructor(private http:HttpClient) { }

  getStudents(){

    return this.http.get('http://localhost:3000/students')
  }



  addStudent(student:any){
    return this.http.post(environment.baseApi+'students',student)

  }
  editStudent(student:any){
    return this.http.put(environment.baseApi+'students/'+student.id,student)
  }

  deleteStudent(studentId :any){
    return this.http.delete(environment.baseApi+'students/'+studentId)
  }

  getClassStudents(){
    return this.http.get(environment.baseApi+'students')
  }

}
