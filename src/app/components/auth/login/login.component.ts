import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  user:any
  constructor(
    private fb:FormBuilder ,
    private service:LoginService  ,
    private router:Router ,
    private toaster:ToastrService
    ) { }

  ngOnInit(): void {
    this.createForm()

  }

  createForm() {
    this.loginForm = this.fb.group({
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
    })
  }



  submit() {
    console.log(this.loginForm.value)
    this.service.getAdmin().subscribe(res=>{
      this.user = res

      console.log(this.user[0].password,this.user[0].email)
      if(this.loginForm.value.password === '1234' && this.loginForm.value.email === 'admin@gmail.com' ){
        // this.service.user.next(this.user)
        this.service.setUserToLocalStorage(res)
            this.toaster.success("login successfully")
            this.router.navigate(['/dashboard'])
      }
      else{
        this.toaster.error("invalid email or password",'error')
      }

    })

    // let index = this.users.findIndex(item =>
    //    item.email == this.loginForm.value.email && item.password == this.loginForm.value.password  )
    // if(index == -1) {
    //   this.toaster.error("الايميل او كلمة المرور غير صحيحة" , "" , {
    //     disableTimeOut: false,
    //     titleClass: "toastr_title",
    //     messageClass: "toastr_message",
    //     timeOut:5000,
    //     closeButton: true,
    //   })
    // }else {
    //   const model = {
    //     username:this.users[index].username,
    //     role:this.type,
    //     userId:this.users[index].id
    //   }
    //   this.service.login(model).subscribe(res => {
    //     this.service.user.next(res)
    //     this.toaster.success("تم تسجيل الدخول بنجاح" , "" , {
    //       disableTimeOut: false,
    //       titleClass: "toastr_title",
    //       messageClass: "toastr_message",
    //       timeOut:5000,
    //       closeButton: true,
    //     })
    //     this.router.navigate(['/dashboard'])
    //   })
    // }

  }

}
