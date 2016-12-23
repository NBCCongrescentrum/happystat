import { Component } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls:['client.component.scss']
})
export class ClientComponent{
  public questions: boolean = true;

  constructor(private statsService: StatsService) {}

  add(score: number){
    console.log('Registering score', score);
    this.statsService.registerScore(score);
    this.questions = false;

    setTimeout( () => this.questions = true , 5000 );
  }
}
