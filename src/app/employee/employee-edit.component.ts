import { Component, OnInit, OnDestroy } from '@angular/core';
// co the bo cai nay di neu khong can
// them activatedRoute
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'employee-edit-component',
    templateUrl: './employee-edit.component.html',

})

export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employee: any;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) { }
    ngOnInit() {
        // lay duoc id cho vao employee-detail
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
            // alert(this._id);
        });
        this.employeeService.GetSingle(this._id).subscribe((data) => {
            this.employee = data;
        });

    }

    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    // router gần như là chuyển hướng về các trang navigate
    SaveForm(){
        this.employeeService.Update(this._id, this.employee).subscribe(response =>{
            if(response){
                alert('Save success');
                this.router.navigate(['/employees']);
            }
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}