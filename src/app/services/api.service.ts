import { Injectable }                                      from "@angular/core";
import { Http, Headers }                                   from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  headers: any = new Headers({ 'Content-Type': 'application/json' });
  root: string = 'https://happy-stat.herokuapp.com';

  constructor(private http:Http) {}

  add(id: string, amount: number) {
    var score: any = { 'score': amount};
    console.log('should add '+amount+' to campaign '+id);
    console.log(this.root+'api/locations/'+id+"/score");
    console.log(JSON.stringify(score));
    return this.http.post(this.root+'/api/locations/'+id+"/score", JSON.stringify(score), this.headers).map(response => response.json);
  }

}
