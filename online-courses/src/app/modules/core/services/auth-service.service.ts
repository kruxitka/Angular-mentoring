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
    localStorage.setItem(user.firstName, JSON.stringify(user));
  }

  public logout(userName = this.user.firstName): void {
    localStorage.removeItem(userName);
    console.log('logged out ' + userName);
  }

  public getUserInfo(userName = this.user.firstName) {
    return localStorage.getItem(userName);
  }
}
