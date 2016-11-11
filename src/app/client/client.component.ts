import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html'
})
export class ClientComponent implements OnInit {
  public sub: any;
  public id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
