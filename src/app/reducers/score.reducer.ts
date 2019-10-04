import { createReducer, Action, on } from '@ngrx/store';
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
    on(Actions.addHomeTouchDown, state => ( {...state, home: state.home + 6} )),
    on(Actions.addHomeExtraPoint, state => ( {...state, home: state.home + 1} )),
    on(Actions.addHomeTwoPointConversion, state => ( {...state, home: state.home + 2} )),
    on(Actions.addHomeSafety, state => ( {...state, home: state.home + 2} ))
);

export function scoreReducer(state, action) {
    return _scoreReducer(state, action);
}





