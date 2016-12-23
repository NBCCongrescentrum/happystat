import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as io from 'socket.io-client';

export interface IScore {
  score: number;
}

@Injectable()
export class StatsService {
  private url = 'https://happy-stat.herokuapp.com';
  private socket;

  constructor(private http: Http) {
    this.socket = io(this.url);
  }

  registerScore(score){
    this.socket.emit('score:register', score);
  }

  getScores(): Observable<any> {
    let observable = new Observable(observer => {
      this.socket.on('score', (score) => {
        console.log('New score recieved from socket', score);
        observer.next(score);
      });

      this.getAllScores().subscribe(res => {
        observer.next(res);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

  getAllScores(): Observable<any> {
    return this.http
      .get(this.url+'/api/scores')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
