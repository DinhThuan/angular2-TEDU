import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

// đề cô rây tờ là cái thằng này
@Component({
    selector:'employee-list',
    templateUrl:'./employee.component.html',
    // cho vao app.component.ts de dung chung cho tat ca moi file
    // providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    constructor(
        private employeeService:EmployeeService,
    ) {}
    ngOnInit(){
        this.employeeService.GetList().subscribe((response:any) =>{
            this.employees = response;
            console.log(this.employees);
        },error=>{
            console.log('system error API -  api bi loi'); 
        } );
    }

}