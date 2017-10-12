import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

// đề cô rây tờ là cái thằng này
@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
    // cho vao app.component.ts de dung chung cho tat ca moi file
    // providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;
    constructor(
        private employeeService: EmployeeService,
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) { }
    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        });
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    }
    Delete(id: number) {
        let confirmResult = confirm("Are you sure to delete employee?");
        if (confirmResult == true) {
            this.employeeService.Delete(id).subscribe(response => {
                // if response rong
                if (response) {
                    alert("Delete ok");
                    this.LoadData();
                }
            });
        }
    }
    LoadData() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
            console.log(this.employees);
        }, error => {
            console.log('system error API -  api bi loi');
        });
    }

}