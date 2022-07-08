import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  //API_LOCAL
    //private API_ALL_COMP = environment.API_LOCAL+'api/v1/company';
    //private API_GET_COMP = environment.API_LOCAL+'api/v1/company/';
    //private API_EDIT_COMP = environment.API_LOCAL+'api/v1/company/';
    //private API_ADD_COMP = environment.API_LOCAL+'api/v1/company/';
    //private API_DEL_COMP = environment.API_LOCAL+'api/v1/company/';

  //API SERVER
  private API_ALL_COMP = environment.API_SERVER+'api/v1/company';
  private API_GET_COMP = environment.API_SERVER+'api/v1/company/';
  private API_EDIT_COMP = environment.API_SERVER+'api/v1/company/';
  private API_ADD_COMP = environment.API_SERVER+'api/v1/company/';
  private API_DEL_COMP = environment.API_SERVER+'api/v1/company/';

  constructor(private http: HttpClient) { }

  getCompanies(){
    return this.http.get(this.API_ALL_COMP);
  }

  getCompany(){
    return this.http.get(this.API_GET_COMP);
  }

  editCompany(user: User): Observable<any>{
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.put(this.API_EDIT_COMP, body);
  }

  addCompany(user: User): Observable<any>{
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.post(this.API_ADD_COMP, body);
  }

  delCompany(){
    return this.http.get(this.API_DEL_COMP);
  }
}
