import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addUser = (user: User) => {
    return this.http.post(`${this.serverUrl}/users`, user, httpOptions).pipe(
      tap((x) => {
        console.log('Successfully added user');
      })
    );
  };

  login = (user: User) => {
    return this.http.post(`${this.serverUrl}/users`, user, httpOptions).pipe(
      tap((x) => {
        console.log('login..');
      })
    );
  };

  getUserById = (id: number | undefined) => {
    return this.http.get(`${this.serverUrl}/users/${id}`).pipe(tap((x) => x));
  };

  createSession = (user: User) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  isAuthenticated = () => {
    const user = window.localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return false;
  };

  logout = () => {
    window.localStorage.clear();
  };
}
