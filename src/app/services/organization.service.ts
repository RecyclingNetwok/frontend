import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  //API_LOCAL
    //private API_ALL_ORGS = environment.API_LOCAL+'api/v1/org';

  //API SERVER
  private API_ALL_ORGS= environment.API_SERVER+'api/v1/org';
  constructor(private http: HttpClient) { }

  getOrgs(){
    return this.http.get(this.API_ALL_ORGS);
  }
}
