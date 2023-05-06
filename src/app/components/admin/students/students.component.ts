import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddStudentComponent } from '../dialogs/add-student/add-student.component';
import { StudnetInfoComponent } from '../dialogs/studnet-info/studnet-info.component';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { EditInfoComponent } from '../dialogs/edit-info/edit-info.component';
import { DeleteMessageComponent } from '../dialogs/delete-message/delete-message.component';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any
  id:any
  constructor(
    private studentService:StudentsService,
    public dialog: MatDialog,
    private router :Router,
    private route :ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getStudents()
    // this.route.params.subscribe(params=>{
    //   console.log(params['id'])
    //   this.id = params['id']
    // })
  }


  getStudents(){
    this.studentService.getStudents().subscribe((res:any)=>{
      console.log(res)
      this.students = res
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;

    });
  }

  view(student:any,studentId:any){
        const dialogRef= this.dialog.open(StudnetInfoComponent,{data:{name:studentId}})




  }

  edit(student:any){

        const dialogRef= this.dialog.open(EditInfoComponent,{data:{student}})

  }
  delete(student:any){
    const dialogRef= this.dialog.open(DeleteMessageComponent,{data:{student}})

  }
}

