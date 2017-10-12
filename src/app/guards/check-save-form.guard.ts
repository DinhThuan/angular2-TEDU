import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmployeeDetailComponent } from '../employee/employee-detail.component';

@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
    canDeactivate(component: EmployeeDetailComponent) {
        alert('You can not leave this page without saving data');
        return false;
    }
}