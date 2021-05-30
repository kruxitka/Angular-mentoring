import { AuthService } from './../../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public isAuthenticated = false;
  public password = '';
  public email = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(this.email, this.password).subscribe(token => {
      if (token) {
        this.authService.setUser(token.token);
        this.router.navigate(['/courses']);
      }
    });
    this.isAuthenticated = this.authService.isAuthenticated();
  }

}
