import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserById = (id: number | undefined) => {
    return this.http.get(`${this.serverUrl}/users/${id}`).pipe(tap((x) => x));
  };

  getCurrentUser = () => {
    const currentUserStr = localStorage.getItem('user');
    if (currentUserStr) {
      return JSON.parse(currentUserStr);
    } else {
      return false;
    }
  };

  updateUser = (user: User, id: number | undefined) => {
    return this.http.patch(`${this.serverUrl}/users/${id}`, user).pipe(
      tap((x) => {
        console.log('Successfully updated user');
      })
    );
  };
}
