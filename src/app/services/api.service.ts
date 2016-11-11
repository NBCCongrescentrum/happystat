import { Injectable }                                      from "@angular/core";
import { Http, Headers }                                   from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  headers: any = new Headers({ 'Content-Type': 'application/json' });
  root: string = 'http:/happy-stat.herokuapp.com/';

  constructor(private http:Http) {}

  add(id: string, amount: number) {
    var score: any = { 'score': amount};
    // return this.http.post('/api/locations', search, this.headers).map(response => response.json());
    return this.http.post(this.root+'api/locations/'+id+"/score", JSON.stringify(score), this.headers).map(response => response.json);

  }

}
