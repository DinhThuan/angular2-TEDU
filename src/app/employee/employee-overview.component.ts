import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pmployee-overview-component',
    template:
    `
        <h3>overview employee</h3>
    `
})

export class EmployeeOverviewComponent implements OnInit, OnDestroy {
    public parentRouterId:number; // khai bao de lay id
    public sub:Subscription;
    constructor(
        private router:Router,
        private activatedRoute:ActivatedRoute
    ){}
    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params =>{
            this.parentRouterId = params['id'];
            alert('child get id: ' + this.parentRouterId);
        })
    }
    ngOnDestroy(){

    }


}