import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AppConfig } from '../app-config';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import { Industries } from '../_models/industries';
/*import 'async';
import 'request';*/

@Injectable()
export class IndustryService {
  private indUrl = '/industries';
                       
/*function getUrlEndPoints( private int idToFetch){
    
   endPoint = endPoints[idToFetch];
};

for( var i = 0; i < endPoints.length; i++ ) {
    getUrlEndPoints(i);
};*/
 

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


//Make muliple http calls in this file

/*async.parallel([
    function(callback)
        // Make http requests
        // Invoke callback(err, result) after http request success or failure
    },
    function(callback){
        // Make http requests
        // Invoke callback(err, result) after http request success or failure
    }
],
// optional callback
function(err, results){
    // the results array will be array of result from the callback
});*/