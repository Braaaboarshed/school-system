import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddMarksComponent } from '../dialogs/add-marks/add-marks.component';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  grades=[
    'First grade','second grade','third grade','fourth grade','fifth  grade','Sixth  grade',
    'Seventh  grade','Eighth  grade','Ninth  grade','10th grade','11th grade','12th grade',
    ]
    students:any
    targetStudents:any

  constructor(
    private StudentService :StudentsService,
    public dialog: MatDialog,

    ) { }

  ngOnInit(): void {
  }

  getGrades(grade :any){
    this.StudentService.getStudents().subscribe(res=>{
      this.students =res
    })
     this.targetStudents = this.students.filter((item:any) =>
    grade.value == item.grade )
    console.log(this.targetStudents)

    }
    add(student:any,studentId:any){
      const dialogRef = this.dialog.open(AddMarksComponent, {
        data: {name: studentId },
      });
    }
    look(studentId :any){
      const dialogRef = this.dialog.open(AddMarksComponent, {
        data: {name: studentId },
      });

    }

  }


