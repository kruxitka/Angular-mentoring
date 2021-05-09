import { AuthService } from './../../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isAuthenticated = false;
  public password = '';
  public email = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login();
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log('logged in successfully');
  }

}
