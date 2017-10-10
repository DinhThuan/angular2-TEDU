import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee.component';
// routing là tên biến
// routes la mot kieu mang
const routing: Routes = [
    //Trang chu, home component
    { path: '', component: HomeComponent },
    // trang con employees
    { path: 'employees', component: EmployeeListComponent }
]

export const appRoutes = RouterModule.forRoot(routing);