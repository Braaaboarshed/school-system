import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { StudentsComponent } from './components/admin/students/students.component';
import { LoginComponent } from './components/auth/login/login.component';
import { Subject } from 'rxjs';
import { SubjectComponent } from './components/admin/subjects/subject/subject.component';
import { MarksComponent } from './components/admin/marks/marks.component';

const routes: Routes = [

  {path:'' , component :LoginComponent},
  {path:'dashboard' ,component :DashboardComponent,

  children: [

    {path: 'students', component: StudentsComponent},
    {path: 'students/:id', component: StudentsComponent},
    {path: 'subjects', component: SubjectComponent},
    {path: 'marks', component: MarksComponent},
  ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
