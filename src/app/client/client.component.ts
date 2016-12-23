import { Component, OnInit }        from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { Http, Headers, Response }  from "@angular/http";
import { ApiService }               from '../services/api.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls:['client.component.scss']
})
export class ClientComponent implements OnInit {
  public sub: any;
  public id: string;
  public question: string;
  public headers: any = new Headers({ 'Content-Type': 'application/json' });
  public root: string = 'http:/happy-stat.herokuapp.com/';
  public errorMessage: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private http: Http ) {}

  getLocation(location: string) {
    return this.http.get('https://happy-stat.herokuapp.com/api/locations/'+location)
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

  ngOnInit(){
    var reply: any;

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getLocation(this.id).then(
      location => this.question = location.question,
      error => this.errorMessage = <any>error);
  }

  add(amount: number){

    console.log('click!');

    var reply: any;

    this.apiService.add(this.id, amount).subscribe(
      data => { reply = data },
      err => console.log('error'),
      () => {
        console.log('done');
        alert("Thank you for your feedback!");
      }
    );
  }

}
