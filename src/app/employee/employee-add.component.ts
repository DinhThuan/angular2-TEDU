import { Component, OnInit, OnDestroy } from '@angular/core';
// co the bo cai nay di neu khong can
// them activatedRoute
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
// import { Subscription } from 'rxjs';

@Component({
    selector: 'employee-add-component',
    templateUrl: './employee-add.component.html',

})

export class EmployeeAddComponent implements OnInit {
    public _id: number;
    // public subscription: Subscription;
    public employee: any;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) { }
    ngOnInit() {
        // lay duoc id cho vao employee-detail
        // this.subscription = this.activatedRoute.params.subscribe(params => {
        //     this._id = params['id'];
        //     // alert(this._id);
        // });
        // this.employeeService.GetSingle(this._id).subscribe((data) => {
        //     this.employee = data;
        // });
        this.employee = {};

    }

    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    // router gần như là chuyển hướng về các trang navigate
    SaveForm(){
        this.employeeService.Add(this.employee).subscribe(response =>{
            if(response){
                alert('add success');
                this.router.navigate(['/employees']);
            }
        })
    }

    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }

}