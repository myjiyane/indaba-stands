import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AppConfig } from '../app-config';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import { Industries } from '../_models/industries';

@Injectable()
export class IndustryService {
  private indUrl = '/industries';
                       
  constructor(private http: Http, private config: AppConfig) { }
  
  // get("/api/industries")
  getIndustries(): Promise<Industries[]> {
    return this.http.get(this.config.apiUrl + this.indUrl)
               .toPromise()
               .then(response => response.json() as Industries[])
               .catch(this.handleError);
  }

// get("/api/industries/:id")
  getIndById(): Promise<Industries[]> {
    return this.http.get(this.config.apiUrl + this.indUrl)
               .toPromise()
               .then(response => response.json() as Industries[])
               .catch(this.handleError);
  }

  private handleError (error: any) {
      const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
