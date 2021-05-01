import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
  };

  constructor() { }

  public login(user: User = this.user): void {
    const token = 'token';
    localStorage.setItem(user.id, JSON.stringify(user));
    localStorage.setItem('access_token', token);
  }

  public logout(user: User = this.user): void {
    localStorage.removeItem(user.id);
    localStorage.removeItem('access_token');
    console.log('logged out ' + user.firstName);
  }

  public isAuthenticated(): boolean {
    return true;
  }

  public getUserInfo(userId = this.user.id) {
    return localStorage.getItem(userId);
  }
}
