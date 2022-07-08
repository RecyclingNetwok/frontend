import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {
  //API_LOCAL
    //private API_ALL_HHD = environment.API_LOCAL+'api/v1/household';
    //private API_GET_HHD = environment.API_LOCAL+'api/v1/household/';
    //private API_EDIT_HHD = environment.API_LOCAL+'api/v1/household/';
    //private API_ADD_HHD = environment.API_LOCAL+'api/v1/household/';
    //private API_DEL_HHD = environment.API_LOCAL+'api/v1/household/';

  //API SERVER
  private API_ALL_HHD = environment.API_SERVER+'api/v1/household';
  private API_GET_HHD = environment.API_SERVER+'api/v1/household/';
  private API_EDIT_HHD = environment.API_SERVER+'api/v1/household/';
  private API_ADD_HHD = environment.API_SERVER+'api/v1/household/';
  private API_DEL_HHD = environment.API_SERVER+'api/v1/household/';

  constructor(private http: HttpClient) { }

  getHouseholds(){
    return this.http.get(this.API_ALL_HHD);
  }

  getHousehold(){
    return this.http.get(this.API_GET_HHD);
  }

  editHousehold(user: User): Observable<any>{
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.post(this.API_EDIT_HHD, body);
  }

  addHouseholds(user: User): Observable<any>{
    const body = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.put(this.API_ADD_HHD, body);
  }

  delHouseholds(){
    return this.http.get(this.API_DEL_HHD);
  }
}
