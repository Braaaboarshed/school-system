import { Component, OnInit } from '@angular/core';
import { AddStudentComponent } from '../../dialogs/add-student/add-student.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddSubjcetComponent } from '../../dialogs/add-subjcet/add-subjcet.component';
import { SubjectsService } from 'src/app/services/subjects.service';
import { DeleteMessageComponent } from '../../dialogs/delete-message/delete-message.component';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
subject:any
  constructor( public dialog: MatDialog,
    private subjectService:SubjectsService
    ) { }

  ngOnInit(): void {
    this.getSubject()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSubjcetComponent, {
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;

    });
  }

  getSubject(){
    this.subjectService.getSubjects().subscribe(res=>{
      this.subject = res
    })
  }

  deleteSubject(subjectId :any){
    const dialogRef= this.dialog.open(DeleteMessageComponent,{data:{name:subjectId,type:'subject'}})

  }
}
