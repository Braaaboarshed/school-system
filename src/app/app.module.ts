import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
//////////////////////////////
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import { StudentsComponent } from './components/admin/students/students.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AddStudentComponent } from './components/admin/dialogs/add-student/add-student.component';
import { StudnetInfoComponent } from './components/admin/dialogs/studnet-info/studnet-info.component';
import { EditInfoComponent } from './components/admin/dialogs/edit-info/edit-info.component';
import { DeleteMessageComponent } from './components/admin/dialogs/delete-message/delete-message.component';
import { SubjectComponent } from './components/admin/subjects/subject/subject.component';
import { AddSubjcetComponent } from './components/admin/dialogs/add-subjcet/add-subjcet.component';
import { MarksComponent } from './components/admin/marks/marks.component';
import { AddMarksComponent } from './components/admin/dialogs/add-marks/add-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    StudentsComponent,
    AddStudentComponent,
    StudnetInfoComponent,
    EditInfoComponent,
    DeleteMessageComponent,
    SubjectComponent,
    AddSubjcetComponent,
    MarksComponent,
    AddMarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatRadioModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
