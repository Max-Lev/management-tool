import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, Subject, catchError, concatMap, exhaustMap, of, switchMap, tap, throwError } from 'rxjs';
import { NotificationsService } from './notifications.service';
import { NotificationActions } from './store/mode/actions/notification.actions';
import { Store } from '@ngrx/store';
import { ManagementState } from './store/reducers';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private notificationsService: NotificationsService,
    private store: Store<ManagementState>) {

  }

  msg$: Subject<any> = new Subject<any>();

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(
        exhaustMap((event: HttpEvent<any>) => {
          if ((event instanceof HttpResponse)) {

            this.store.dispatch(NotificationActions.success({ success: true, msg: event.body['message'] }));
            // console.log('Success', event);
            // else {
            //   this.store.dispatch
            // (NotificationActions.failure({ success: false, msg: event.body['message'] }));
            // console.log('Error', event);
            // }
            // this.msg$.next(event);
            // this.notificationsService.notify$(event);
          }
          return of(event);
        })
        // tap({
        //   next: (event) => {
        //     if ((event instanceof HttpResponse)) {
        //       console.log('success', event);
        //       this.store.dispatch
        //         (NotificationActions.loadNotificationsSuccess({ success: true, msg: 'Success' }));
        //     }
        //     // return event;
        //   }
        //   // error: (error) => (ok = 'failed'),
        // }),
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
            this.store.dispatch(NotificationActions.failure({ success: false, msg: error.error.message }));
          } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            this.store.dispatch(NotificationActions.failure({ success: false, msg: error.error.message }));
          }
          console.log(errorMsg);
          return throwError(() => new Error(errorMsg));
          // return throwError(() => new Error('Something bad happened; please try again later.'));
        })
      )
  }
}

