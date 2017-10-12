import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EmployeeListComponent } from './employee/employee.component';
import { HttpModule } from '@angular/http';
// chua hieu thang nay de lam gi
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// cu thang nao export thi phai cho vao day
import { appRoutes } from './app.routes';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeOverviewComponent } from './employee/employee-overview.component';
import { EmployeeProjectComponent } from './employee/employee-projects.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        HomeComponent,
        NotFoundComponent,
        EmployeeDetailComponent,
        EmployeeOverviewComponent,
        EmployeeProjectComponent,
        LoginComponent,
        

    ],
    imports: [
        BrowserModule, FormsModule, HttpModule, appRoutes
    ],
    providers: [EmployeeService, LoginService, CheckLoginGuard, CheckSaveFormGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
