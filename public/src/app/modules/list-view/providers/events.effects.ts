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
          map((event: { data: IProduct[], message: string }) => {
            return getProductsSuccessAction({ payload: event.data })
          })
        )
      }),
      catchError(error => EMPTY)
    ));


  addEvent$(event: IEventsForm): Observable<{ data: IProduct[], message: string }> {
    return this.http.post<{ data: IProduct[], message: string }>(environment.postEvent, event);
  }

  updateEvent$(payload: IProduct): Observable<{ data: IProduct[], message: string }> {
    return this.http.put<{ data: IProduct[], message: string }>(environment.updateEvent, payload);
  }

  eventsUpdate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EventsActions.eventsUpdate),
      exhaustMap((action: { data: IProduct }) => {
        return this.updateEvent$(action.data).pipe(
          map((event: { data: IProduct[], message: string }) => {
            EventsActions.eventsSuccess({ data: event.data });
            return getProductsSuccessAction({ payload: event.data as unknown as IProduct[], })
          })
        )
      }),
      catchError(error => EMPTY)
    )
  });

}

