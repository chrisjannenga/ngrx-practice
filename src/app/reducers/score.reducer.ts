import { createReducer, on } from '@ngrx/store';
import * as Actions from '../action/score.actions';

export interface ScoreState {
    home: number;
    away: number;
}

export const initialState: ScoreState = {
    home: 0,
    away: 0
};

// tslint:disable-next-line: variable-name
const _scoreReducer = createReducer(initialState,
    // Add to Home Score
    on(Actions.addHomeTouchDown, state => ( {...state, home: state.home + 6} )),
    on(Actions.addHomeExtraPoint, state => ( {...state, home: state.home + 1} )),
    on(Actions.addHomeTwoPointConversion, state => ( {...state, home: state.home + 2} )),
    on(Actions.addHomeSafety, state => ( {...state, home: state.home + 2} )),
    on(Actions.addHomeFieldGoal, state => ( {...state, home: state.home + 3} )),
    // Add to Away Score
    on(Actions.addAwayTouchDown, state => ( {...state, away: state.away + 6} )),
    on(Actions.addAwayExtraPoint, state => ( {...state, away: state.away + 1} )),
    on(Actions.addAwayTwoPointConversion, state => ( {...state, away: state.away + 2} )),
    on(Actions.addAwaySafety, state => ( {...state, away: state.away + 2} )),
    on(Actions.addAwayFieldGoal, state => ( {...state, away: state.away + 3} )),
    // Sub from Home Score
    on(Actions.subHomeTouchDown, state => ( {...state, home: state.home - 6} )),
    on(Actions.subHomeExtraPoint, state => ( {...state, home: state.home - 1} )),
    on(Actions.subHomeTwoPointConversion, state => ( {...state, home: state.home - 2} )),
    on(Actions.subHomeSafety, state => ( {...state, home: state.home - 2} )),
    on(Actions.subHomeFieldGoal, state => ( {...state, home: state.home - 3} )),
    // Sub from Away Score
    on(Actions.subAwayTouchDown, state => ( {...state, away: state.away - 6} )),
    on(Actions.subAwayExtraPoint, state => ( {...state, away: state.away - 1} )),
    on(Actions.subAwayTwoPointConversion, state => ( {...state, away: state.away - 2} )),
    on(Actions.subAwaySafety, state => ( {...state, away: state.away - 2} )),
    on(Actions.subAwayFieldGoal, state => ( {...state, away: state.away - 3} )),
    // General Actions
    on(Actions.resetHome, state => ( {...state, home: 0} )),
    on(Actions.resetAway, state => ( {...state, away: 0} )),
    on(Actions.resetAll, state => ( {home: 0, away: 0} ))
);

export function scoreReducer(state, action) {
    return _scoreReducer(state, action);
}





