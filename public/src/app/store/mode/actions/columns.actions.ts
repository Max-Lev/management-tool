import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { IColumn } from 'src/app/modules/list-view/models/products.model';

export const ColumnsActions = createActionGroup({
  source: 'Columns',
  events: {
    'Load Columns': emptyProps(),
    'Load Columns Success': props<{ payload: IColumn[] }>(),
    'Load Columns Failure': props<{ error: false }>(),
  }
});
