import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http:HttpClient) { }

  addSubject(subjectName:any){
    return this.http.post(environment.baseApi+'subjects',subjectName)

  }

  getSubjects(){
    return this.http.get(environment.baseApi+'subjects')
  }
  deleteSubject(id:any){
    return this.http.delete(environment.baseApi+'subjects/'+id)
  }
}
