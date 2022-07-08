import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  //API_LOCAL
    //private API_ALL_COLL = environment.API_LOCAL+'api/v1/collector';

  //API SERVER
  private API_ALL_COLL = environment.API_SERVER+'api/v1/collector';
  constructor(private http: HttpClient) { }

  getCollectors(){
    return this.http.get(this.API_ALL_COLL);
  }
}
