import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { table } from 'console';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarksService } from 'src/app/services/marks.service';

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
    console.log(this.data.id,this.data.student)
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
    // console.log(this.rows)
  this.rows.find(item=>{
    if(
      (item.name==='' || item.mark =='')

    )
      this.valid = false
    })
this.markServices.addMarks(this.data.student,this.data.id,this.rows).subscribe(res=>{
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



}
