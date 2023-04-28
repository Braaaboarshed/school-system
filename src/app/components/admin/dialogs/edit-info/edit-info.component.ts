import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  form !: FormGroup;

  grades=[
    'First grade','second grade','third grade','fourth grade','fifth  grade','Sixth  grade',
    'Seventh  grade','Eighth  grade','Ninth  grade','10th grade','11th grade','12th grade',
    ]
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditInfoComponent>,
    private studentService :StudentsService,
    private tostar :ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
    this.getForm()
    console.log(this.data.student.email)
    // this.initializeForm()
  }

  getForm(){
    this.form= this.fb.group ({
      studentName:[this.data.student.studentName,[Validators.required]],
      email:[this.data.student.email,[Validators.required,Validators.email]],
      password:[this.data.student.password,[Validators.required]],
      grade :[this.data.student.grade,[Validators.required]],
      id:[this.data.student.id]

    })



  }



  edit() {
    this.studentService.editStudent(this.form.value).subscribe(res=>{
      this.tostar.success('student edited successfully')
      location.reload()
    })
    this.dialogRef.close()
  }
}



