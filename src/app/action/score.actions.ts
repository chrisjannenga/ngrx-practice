import { createAction } from '@ngrx/store';

// Home Team Addition Actions

export const addHomeTouchDown = createAction('[SCORE] Home Team - Touchdown - Add');
export const addHomeExtraPoint = createAction('[SCORE] Home Team - Extra Point Attempt - Add');
export const addHomeTwoPointConversion = createAction('[SCORE] Home Team - Two Point Conversion - Add');
export const addHomeSafety = createAction('[SCORE] Home Team - Safety - Add');
export const addHomeFieldGoal = createAction('[SCORE] Home Team - Field Goal - Add');

// Away Team Addition Actions

export const addAwayTouchDown = createAction('[SCORE] Away Team - Touchdown - Add');
export const addAwayExtraPoint = createAction('[SCORE] Away Team - Extra Point Attempt - Add');
export const addAwayTwoPointConversion = createAction('[SCORE] Away Team - Two Point Conversion - Add');
export const addAwaySafety = createAction('[SCORE] Away Team - Safety - Add');
export const addAwayFieldGoal = createAction('[SCORE] Away Team - Field Goal - Add');

// Home Team Subtraction Actions

export const subHomeTouchDown = createAction('[SCORE] Home Team - Touchdown - Subtract');
export const subHomeExtraPoint = createAction('[SCORE] Home Team - Extra Point Attempt - Subtract');
export const subHomeTwoPointConversion = createAction('[SCORE] Home Team - Two Point Conversion - Subtract');
export const subHomeSafety = createAction('[SCORE] Home Team - Safety - Subtract');
export const subHomeFieldGoal = createAction('[SCORE] Home Team - Field Goal - Subtract');

// Away Team Subtraction Actions

export const subAwayTouchDown = createAction('[SCORE] Away Team - Touchdown - Subtract');
export const subAwayExtraPoint = createAction('[SCORE] Away Team - Extra Point Attempt - Subtract');
export const subAwayTwoPointConversion = createAction('[SCORE] Away Team - Two Point Conversion - Subtract');
export const subAwaySafety = createAction('[SCORE] Away Team - Safety - Subtract');
export const subAwayFieldGoal = createAction('[SCORE] Away Team - Field Goal - Subtract');

// General Actions

export const resetHome = createAction('[SCORE] Home Team - Reset');
export const resetAway = createAction('[SCORE] Away Team - Reset');
export const resetAll = createAction('[SCORE] Reset All');
