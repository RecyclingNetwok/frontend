import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment.prod";
import { User } from '../models/User.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API_LOCAL
    //private API_LOGIN = environment.API_LOCAL+'api/auth/signin';
    //private API_SIGNUP = environment.API_LOCAL+'api/auth/signup';
    //private API_ALL_ROLES = environment.API_LOCAL+'api/auth/roles';
    private API_CHANGE_PASSWORD = environment.API_LOCAL + 'change-password';
    private API_CHANGE_AVATAR = environment.API_LOCAL + 'change-avatar';
    private API_CHANGE_PROFILE = environment.API_LOCAL+'change-profile';
    
  //API SERVER
    private API_LOGIN = environment.API_SERVER+'api/auth/signin';
    private API_SIGNUP = environment.API_SERVER+'api/auth/signup';
    private API_ALL_ROLES = environment.API_SERVER+'api/auth/roles';
    // private API_CHANGE_PASSWORD = environment.API_SERVER+'change-password';
    // private API_CHANGE_AVATAR = environment.API_SERVER+'change-avatar';
    // private API_CHANGE_PROFILE = environment.API_SERVER+'change-profile';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string; }): Observable<any> {
    return this.http.post(this.API_LOGIN, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: User, role:string[]): Observable<any> {
    const body = {
      user_type: user.user_type,
      username: user.username,
      email: user.email,
      password: user.password,
      role: role,
    };
    return this.http.post(this.API_SIGNUP, body, httpOptions);
  }

  getAllRoles() {
    return this.http.get(this.API_ALL_ROLES, httpOptions);
  }

  roleMatch(allowedRoles: string[]): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles') || '');
    allowedRoles.forEach((element) => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return isMatch;
      }
      return false;
    });
    return isMatch;
  }
}
