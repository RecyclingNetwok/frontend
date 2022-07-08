import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //API_LOCAL
    //private API_ALL_ADMINS = environment.API_LOCAL+'api/v1/admin';
  //private API_GET_ADMIN = environment.API_LOCAL+'api/v1/admin/';
  //private API_EDIT_ADMIN = environment.API_LOCAL+'api/v1/admin/';
  //private API_ADD_ADMIN = environment.API_LOCAL+'api/v1/admin/';
  //private API_DEL_ADMIN = environment.API_LOCAL+'api/v1/admin/';

  //API SERVER
  private API_ALL_ADMINS = environment.API_SERVER+'api/v1/admin';
  private API_GET_ADMIN = environment.API_SERVER+'api/v1/admin/';
  private API_EDIT_ADMIN = environment.API_SERVER+'api/v1/admin/';
  private API_ADD_ADMIN = environment.API_SERVER+'api/v1/admin/';
  private API_DEL_ADMIN = environment.API_SERVER+'api/v1/admin/';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<User[]>{
    return this.http.get<User[]>(this.API_ALL_ADMINS);
  }

  getAdmin(user: User): Observable<any>{
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.put<any>(this.API_GET_ADMIN, body);
  }

  editAdmin(user: User): Observable<any>{
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.post<any>(this.API_EDIT_ADMIN, body);
  }

  addAdmin(user: User): Observable<any>{
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.put<any>(this.API_ADD_ADMIN, body);
  }

  delAdmin(): Observable<any>{
    return this.http.delete<any>(this.API_DEL_ADMIN);
  }

}
