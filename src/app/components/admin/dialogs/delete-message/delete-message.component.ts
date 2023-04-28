import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from 'src/app/services/students.service';
import { EditInfoComponent } from '../edit-info/edit-info.component';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditInfoComponent>,
    private studentService :StudentsService,
    private tostar :ToastrService,
    private subjectService :SubjectsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  deleteStudent(){
    this.studentService.deleteStudent(this.data.student.id).subscribe(res=>{
      location.reload()
    })
  }
  deleteSubject(){
    if(this.data.type == 'subject'){

      this.subjectService.deleteSubject(this.data.name).subscribe(res=>{
        location.reload()
      })
    }
  }

}
