import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee/employee-overview.component';
import { EmployeeProjectComponent } from './employee/employee-projects.component';
import { LoginComponent } from './login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

// routing là tên biến
// routes la mot kieu mang
const routing: Routes = [
    // mac dinh se khong co trang chu, ma vao thang employees luon
    // {path:'',redirectTo:'employees',pathMatch:'full'},
    //Trang chu, home component
    { path: '', component: HomeComponent },
    // trang con employees
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },
    { path: 'login', component: LoginComponent },
    // xem chi tiet san pham, truyen vao id cua tung thang
    // ten employee-detail phai giong o ten trong file employee.component.html
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent,canDeactivate:[CheckSaveFormGuard],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectComponent },
        ]
    },
    { path: '**', component: NotFoundComponent }
]
// truong hop muon sua xong, no tu dong reload lai trang.
export const appRoutes = RouterModule.forRoot(routing);