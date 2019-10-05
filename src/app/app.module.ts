import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { scoreReducer } from './reducers/score.reducer';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({score: scoreReducer}),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
