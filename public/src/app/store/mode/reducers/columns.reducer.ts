import { createReducer, on } from '@ngrx/store';
import { IColumn } from 'src/app/modules/list-view/models/products.model';
import { ColumnsActions } from '../actions/columns.actions';

export const columnsFeatureKey = 'columns';

// export enum Columns

export interface ColumnsState {
  type: string;
  columns: IColumn[];
}

export const initialState: ColumnsState = {
  type: ColumnsActions.loadColumns().type,
  columns: []
};

export const ColumnsReducer = createReducer(
  initialState,
  on(ColumnsActions.loadColumnsSuccess, (state, action: { payload: IColumn[] }) => {
    const s = {
      ...state, ...{
        columns: action.payload
      }
    }
    return s;
  }),
  on(ColumnsActions.loadColumnsFailure, (state, action: { error: false }) => {
    return { ...state, ...action }
  })
);

