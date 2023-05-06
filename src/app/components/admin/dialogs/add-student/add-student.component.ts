import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  form !: FormGroup;

grades=[
'First grade','second grade','third grade','fourth grade','fifth  grade','Sixth  grade',
'Seventh  grade','Eighth  grade','Ninth  grade','10th grade','11th grade','12th grade',
]




  constructor(
    private fb: FormBuilder,
    // @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<AddStudentComponent>,
    private studentService :StudentsService,
    private tostar :ToastrService

  ) { }

  ngOnInit(): void {
    this. createForm()

  }

  createForm(){
    this.form = this.fb.group({
      studentName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      grade :['',[Validators.required]],


    })
  }


  submit() {
    console.log(this.form.value)
    this.studentService.addStudent(this.form.value).subscribe(res=>{
      this.tostar.success('student Added successfully')
      location.reload()
    })
    this.dialogRef.close()
  }
}
