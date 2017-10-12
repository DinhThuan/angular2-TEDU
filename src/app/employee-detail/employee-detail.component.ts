import { Component, OnInit, OnDestroy } from '@angular/core';
// co the bo cai nay di neu khong can
// them activatedRoute
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'employee-detail-component',
    templateUrl: './employee-detail.component.html',

})

export class EmployeeDetailComponent implements OnInit, OnDestroy {
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}