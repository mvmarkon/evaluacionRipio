import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
// import { AuthenticationService } from '../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  providers: [ UserService ]
})
export class LoginRegisterComponent implements OnInit {
  register;
  login;

  constructor (
    private userService: UserService,
    private router: Router ) {}

  ngOnInit() {
    this.userService.logout();
    this.login = true;
    this.register = {
      username: '',
      password: '',
      email: ''
    };
  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert ('user' + this.register.username + ' has been created');
      },
      error => console.log('Error: ', error)
    );
  }
  loginUser() {
    this.userService.login(this.register).subscribe(
      response => {
        this.router.navigate(['home']);
      },
      error => console.log('Error: ', error)
    );
  }

}
