import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';

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
    localStorage.setItem(user.id, JSON.stringify(user));
  }

  public logout(user: User = this.user): void {
    localStorage.removeItem(user.id);
    console.log('logged out ' + user.firstName);
  }

  public isAuthenticated(): boolean {
    return true;
  }

  public getUserInfo(userId = this.user.id) {
    return localStorage.getItem(userId);
  }
}
