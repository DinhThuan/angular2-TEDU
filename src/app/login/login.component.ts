import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private router: Router, private loginService: LoginService) { }
    CheckLogin(value: any) {
        console.log(value);
        if (value.username == "admin" && value.password == "123") {
            this.loginService.setLogin(true);
            // neu dung thi se chuyen sang trang home component
            this.router.navigate(['/']);
        }
    }
}
