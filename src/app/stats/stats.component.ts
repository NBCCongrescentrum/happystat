import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.component.html'
})
export class StatsComponent implements OnInit, OnDestroy {

  scores = [];

  scoresOf1 = [];
  scoresOf25 = [];
  scoresOf50 = [];
  scoresOf75 = [];
  scoresOf100 = [];

  totals: Array<number> = [];
  highest: number = 0;

  percentage1:number = 0;
  percentage25:number = 0;
  percentage50:number = 0;
  percentage75:number = 0;
  percentage100:number = 0;

  averageScore: any;

  connection: any;
  message: string;

  constructor(private statsService: StatsService) {}

  newScore(score: number) {
    if ( typeof(score) != 'undefined') {

      this.scores.push(score);

      switch ( score ) {
        case 1:
          this.scoresOf1.push(score);
          this.totals[0] = this.scoresOf1.length;
          break;
        case 25:
          this.scoresOf25.push(score);
          this.totals[1] = this.scoresOf25.length;
          break;
        case 50:
          this.scoresOf50.push(score);
          this.totals[2] = this.scoresOf50.length;
          break;
        case 75:
          this.scoresOf75.push(score);
          this.totals[3] = this.scoresOf75.length;
          break;
        case 100:
          this.scoresOf100.push(score);
          this.totals[4] = this.scoresOf100.length;
          break;
      }

      this.findHighest();

      this.percentage1 = (this.scoresOf1.length / this.highest) * 100;
      this.percentage25 = (this.scoresOf25.length / this.highest) * 100;
      this.percentage50 = (this.scoresOf50.length / this.highest) * 100;
      this.percentage75 = (this.scoresOf75.length / this.highest) * 100;
      this.percentage100 = (this.scoresOf100.length / this.highest) * 100;

      this.calculateAverage();
    }
  }

  findHighest() {
    var m = -Infinity, i = 0, n = this.totals.length;
    for ( let total of this.totals) {
      if ( total > m ) {
        m = total;
      }
    }

    this.highest = m;
  }

  calculateAverage(): void {
    let total = 0;
    for ( let score of this.scores ) {
      if ( score > 0 ) total += score;
    }

    this.averageScore = ((total / this.scores.length) / 10).toFixed(2);
  }

  ngOnInit() {
    this.statsService.getAllScores().subscribe((res: any) => {
      res.forEach((score:any) => {
        if ( score.hasOwnProperty('score') && score.score > 0 && score.score) {
          this.newScore(score.score);
        }
      });
    });

    this.connection = this.statsService.getScores().subscribe(score => {
      this.newScore(score.data);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
