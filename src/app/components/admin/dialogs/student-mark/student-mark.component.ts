import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarksService } from 'src/app/services/marks.service';

@Component({
  selector: 'app-student-mark',
  templateUrl: './student-mark.component.html',
  styleUrls: ['./student-mark.component.css']
})
export class StudentMarkComponent implements OnInit {
  studentMarks:any
  idArray:any=[]
  marks:any
  recentMark:any
  constructor(
    private markServices :MarksService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
    this.getStudentMarks()
    this.studentMarks = this.data.student
    console.log(this.data.id)
    console.log(this.studentMarks.mark)


  }

  getStudentMarks(){
    this.markServices.getStudentMark().subscribe(res=>{
      this.studentMarks = res
      // console.log(this.studentMarks)

      this.studentMarks.map((student :any) =>{
        if(student.id === this.data.id){
          this.marks = student.marks
        }
      })

       })
    //   }
    //   // console.log(this.idArray)
    //   this.getTargetStudent()
    // })


  }

  // getTargetStudent(){
  //   let x =  this.idArray.find((item:any)=>{
  //       if( item === this.data.name){
  //         for(let i in this.studentMarks){
  //           // console.log(this.studentMarks[i])
  //           let x  =this.studentMarks[i]
  //           // if(item === x.studentId)
  //           console.log(x[i])
  //       }
  //     }
  //   })
  //  let x =  this.idArray.find((item:any)=>{
  //   if( item === this.data.name){
  //     for(let i in this.studentMarks){
  //       let studentObject = this.studentMarks[i]
  //       studentObject.map((item:any)=>{
  //        if(item.studentId === this.data.name )
  //        this.recentMark = studentObject
  //       })
  //       console.log(studentObject)
  //     }
  //   }
  //   })
// }
}

