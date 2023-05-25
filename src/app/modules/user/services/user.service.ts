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
}
