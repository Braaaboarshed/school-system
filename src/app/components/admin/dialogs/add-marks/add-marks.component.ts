import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { table } from 'console';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarksService } from 'src/app/services/marks.service';
import { Student } from 'src/app/models/sudent';

@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {
  rows: any[] = [];
  form!:FormGroup;
  row:any
  recentMark:any
  name:any
  studentMarks:any
  showEditable: boolean = false;
  editRowId: any;
  valid =true
  mark:any
  id:any=[]
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddMarksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private markServices :MarksService,

    ) {
    this.rows = [{id:1,name:'',mark:''}];
  }
  ngOnInit(): void {
    this.getStudentMarks()
    this.form = this.fb.group({
      subjectName:['',Validators.required],
      mark:['',Validators.required]
    })
    // console.log(this.data.name)
  }

  addRow() {
    let indexForId = this.rows.length + 1
    this.rows.push({
      id: indexForId,
      name: ''
    })
    this.name = false
    this.mark = false
  }

  toggle(val:any) {
    this.editRowId = val;
  }
  deleteRow(i:any){
    this.rows.splice(i,1)
    this.mark =true
    this.name =true
  }

  submit(){
    console.log(this.rows)
  this.rows.find(item=>{
    if(
      (item.name==='' || item.mark =='')

    )
      this.valid = false
    })
this.markServices.addMarks(this.data.name,this.rows).subscribe(res=>{
  console.log(res)
})
    this.dialogRef.close()





  }
  nameValidator(name:any){
    if(name !== '')
    this.name = true
  }
  markValidator(mark:any){
    if(mark == ''    )
    this.mark = true
  }

  getStudentMarks(){
    this.markServices.getMark().subscribe(res=>{
      this.studentMarks = res
        for(let i in this.studentMarks){
         let studentObject = this.studentMarks[i]
         studentObject.map((item:any)=>{
          if(item.studentId)
          this.id.push(item.studentId)

        })
      }
      this.getTargetStudent()
    })


  }

  getTargetStudent(){
   let x =  this.id.findIndex((item:any)=>{
    if( item === this.data.name){
      for(let i in this.studentMarks){
        let studentObject = this.studentMarks[i]
        studentObject.map((item:any)=>{
         if(item.studentId === this.data.name)
         this.recentMark = studentObject
          console.log(this.recentMark)
       })
     }
    }
    })
  }

}
