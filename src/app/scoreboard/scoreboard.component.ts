import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ScoreActions from '../action/score.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  homeScore$: Observable<number>;

  constructor(private store: Store<{ score: {home: number, away: number} }>) {
    this.homeScore$ = store.pipe(select('score', 'home'));
  }

  ngOnInit() {
  }

  homeTouchdown(add: boolean) {
    if (add) { this.store.dispatch(ScoreActions.addHomeTouchDown); }
    if (!add) { this.store.dispatch(ScoreActions.subHomeTouchDown); }
  }

}
