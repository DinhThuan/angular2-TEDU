import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee.component';
import { NotFoundComponent } from './notfound.component';
// routing là tên biến
// routes la mot kieu mang
const routing: Routes = [
    // mac dinh se khong co trang chu, ma vao thang employees luon
    // {path:'',redirectTo:'employees',pathMatch:'full'},
    //Trang chu, home component
    { path: '', component: HomeComponent },
    // trang con employees
    { path: 'employees', component: EmployeeListComponent },
    { path: '**', component: NotFoundComponent }
]
// truong hop muon sua xong, no tu dong reload lai trang.
export const appRoutes = RouterModule.forRoot(routing);