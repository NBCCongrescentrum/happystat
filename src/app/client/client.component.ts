import { Component, OnInit }        from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { Http, Headers }            from "@angular/http";
import { ApiService }               from '../services/api.service';


@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html'
})
export class ClientComponent implements OnInit {
  public sub: any;
  public id: string;
  public headers: any = new Headers({ 'Content-Type': 'application/json' });
  public root: string = 'http:/happy-stat.herokuapp.com/';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private http: Http ) {}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  add(amount: number){
    this.apiService.add(this.id, amount);
  }

}
