import { UserToken } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl: string;
  public isUserLoggedIn!: boolean;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.apiUrl = 'http://localhost:3004';
  }

  public login(login: string, password: string): Observable<UserToken> {
    this.isUserLoggedIn = true;
    return this.http.post<UserToken>(`${this.apiUrl}/auth/login`, { login, password });
  }

  public setUser(token: string): void {
    localStorage.setItem('access_token', token);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    console.log('logged out');
    this.isUserLoggedIn = false;
    window.location.reload();
  }

  public isAuthenticated(): boolean {
    return this.isUserLoggedIn;
  }

  public getUserInfo(): any {
    return localStorage.getItem('access_token');
  }
}
