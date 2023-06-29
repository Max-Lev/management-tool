import { createReducer, on } from '@ngrx/store';
import { ADD_MODE_ACTION, List_MODE_ACTION, MODE_TYPE_ENUM, Tiles_MODE_ACTION } from '../actions/mode.actions';

export const modeFeatureKey = 'mode';

export interface ModeState {
  type: MODE_TYPE_ENUM;
}

export const initialState: ModeState = {
  type: MODE_TYPE_ENUM.INITIAL
};
export const listlState: ModeState = {
  type: MODE_TYPE_ENUM.LIST
};
export const tilesState: ModeState = {
  type: MODE_TYPE_ENUM.TILES
};
export const addState: ModeState = {
  type: MODE_TYPE_ENUM.ADD
};

export const ModeReducer = createReducer(
  initialState,
  on(List_MODE_ACTION, (state: ModeState, action: { payload: { modeType: MODE_TYPE_ENUM } }) => {
    debugger;
    console.log(state, action)
    return { ...state, ...action };
  }),
  on(Tiles_MODE_ACTION, (state: ModeState, 
    action: { payload: { modeType: MODE_TYPE_ENUM } }) => {
    debugger;
    console.log(state, action)
    return { ...state, ...action };
  }),
  on(ADD_MODE_ACTION, (state: ModeState, action: { payload: { modeType: MODE_TYPE_ENUM } }) => {
    debugger;
    console.log(state, action)
    return { ...state, ...action };
  }),
);

