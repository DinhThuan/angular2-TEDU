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

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpModule, appRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
