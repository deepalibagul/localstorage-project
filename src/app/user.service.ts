import { Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getusers() {
    return this
      .http
      .get(`${this.url}/users`);
  }
}
