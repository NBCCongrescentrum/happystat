import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';


@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls:['client.component.scss']
})
export class ClientComponent implements OnInit {
  constructor(private statsService: StatsService) {}

  ngOnInit(){
  }

  add(score: number){
    console.log('Registering score', score);
    this.statsService.registerScore(score);
  }
}
