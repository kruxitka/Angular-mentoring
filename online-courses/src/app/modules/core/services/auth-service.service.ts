import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggedIn!: boolean;
  public user = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
  };

  constructor() {
    this.isUserLoggedIn = false;
  }

  public login(user: User = this.user): void {
    const token = 'token';
    localStorage.setItem(user.id, JSON.stringify(user));
    localStorage.setItem('access_token', token);
    this.isUserLoggedIn = true;
  }

  public logout(user: User = this.user): void {
    localStorage.removeItem(user.id);
    localStorage.removeItem('access_token');
    console.log('logged out ' + user.firstName);
    this.isUserLoggedIn = false;
    window.location.reload();
  }

  public isAuthenticated(): boolean {
    return this.isUserLoggedIn;
  }

  public getUserInfo(userId = this.user.id) {
    return localStorage.getItem(userId);
  }
}
