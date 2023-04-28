import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddStudentComponent } from '../add-student/add-student.component';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-add-subjcet',
  templateUrl: './add-subjcet.component.html',
  styleUrls: ['./add-subjcet.component.css']
})
export class AddSubjcetComponent implements OnInit {
  form !: FormGroup;
  constructor( private fb: FormBuilder,
    // @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<AddStudentComponent>,
    private subjectService :SubjectsService,
    private tostar :ToastrService
) { }

  ngOnInit(): void {
    this. createForm()

  }

  createForm(){
    this.form = this.fb.group({
      subjectName:['',[Validators.required]],



    })
  }


  submit() {
    console.log(this.form.value)
    this.subjectService.addSubject(this.form.value).subscribe(res=>{
      this.tostar.success('student Added successfully')
      location.reload()
    })
    this.dialogRef.close()
  }
}
