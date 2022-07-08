import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment.prod";

const API_URL = 'https://recycling-network.herokuapp.com/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //API_LOCAL
    //private API_PUBLIC = environment.API_LOCAL+'api/all';
    //private API_HHDDASH = environment.API_LOCAL+'api/hhd';
    //private API_COLLDASH = environment.API_LOCAL + 'api/coll';
    //private API_ORGDASH = environment.API_LOCAL + 'api/org';
    //private API_COMPDASH = environment.API_LOCAL+'api/comp';
    //private API_ADMINDASH = environment.API_LOCAL+'api/admin';

  //API SERVER
    private API_PUBLIC = environment.API_SERVER+'api/all';
    private API_HHDDASH = environment.API_SERVER+'api/hhd';
    private API_COLLDASH = environment.API_SERVER + 'api/coll';
    private API_ORGDASH = environment.API_SERVER + 'api/org';
    private API_COMPDASH = environment.API_SERVER+'api/comp';
    private API_ADMINDASH = environment.API_SERVER+'api/admin';

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(this.API_PUBLIC, { responseType: 'text' });
  }
 
  getHhdBoard(): Observable<any> {
    return this.http.get(this.API_HHDDASH, { responseType: 'text' });
  }

  getOrgBoard(): Observable<any> {
    return this.http.get(this.API_ORGDASH, { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_ADMINDASH, { responseType: 'text' });
  }

  getCollectorBoard(): Observable<any> {
    return this.http.get(this.API_COLLDASH, { responseType: 'text' });
  }
  
  getCompanyBoard(): Observable<any> {
    return this.http.get(this.API_COMPDASH, { responseType: 'text' });
  }
}
