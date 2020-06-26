import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsercrudService {
  private baseUrl = 'http://localhost:8087/api/v1/users';
  private baseUrl1 = 'http://localhost:8087/api/v1';

  constructor(private http: HttpClient) { }

  createUser(user: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, user);
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  Activate(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/Activate/${id}`);
  }

}
