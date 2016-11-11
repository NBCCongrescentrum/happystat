import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.component.html'
})
export class StatsComponent implements OnInit {

  locations: any;

  constructor(private http: Http) {}

  ngOnInit() {
    
  }
}
