import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.component.html'
})
export class StatsComponent implements OnInit {

  locations: any;
  errorMessage: any;

  constructor(private http: Http) {}

  ngOnInit() {
    this.getLocations().then(
      locations => this.locations = locations,
      error => this.errorMessage = <any>error);
  }

  getLocations() {
    return this.http.get('https://happy-stat.herokuapp.com/api/locations')
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    console.log(error);
    return Promise.reject(error);
  }
}
