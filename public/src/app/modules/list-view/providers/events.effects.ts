import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, catchError, exhaustMap, map } from 'rxjs';
import { IEventsForm } from 'src/app/shared/models/events-form.model';
import { EventsActions } from 'src/app/store/mode/actions/events.actions';
import { getProductsSuccessAction } from 'src/app/store/mode/actions/products.actions';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/products.model';



@Injectable()
export class EventsEffects {


  constructor(private actions$: Actions, private http: HttpClient) { }

  events$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.eventsAdd),

      exhaustMap((action: { data: IEventsForm }) => {
        return this.addEvent$(action.data).pipe(
          map((event: IProduct[]) => {
            return getProductsSuccessAction({ payload: event})
          })
        )
      }),
      catchError(error => EMPTY)
    ));


  addEvent$(event: IEventsForm): Observable<IEventsForm[]> {
    return this.http.post<IEventsForm[]>(environment.postEvent, event);
  }

  updateEvent$(payload: IProduct): Observable<IProduct[]> {
    return this.http.put<IProduct[]>(environment.updateEvent, payload);
  }

  eventsUpdate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActions.eventsUpdate),
      exhaustMap((action: { data: IProduct }) => {
        return this.updateEvent$(action.data).pipe(
          map((event: IProduct[]) => {
            EventsActions.eventsSuccess({ data: event });
            return getProductsSuccessAction({ payload: event as unknown as IProduct[], })
          })
        )
      }),
      catchError(error => EMPTY)
    )
  });

}

