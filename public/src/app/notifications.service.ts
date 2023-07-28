import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY, Subject, concatMap, exhaustMap, map, of } from 'rxjs';
import { NotificationActions } from './store/mode/actions/notification.actions';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private message: Subject<any> = new Subject();

  message$ = this.message.asObservable();

  constructor(private actions: Actions) { }

  notify$(msg: any) {
    console.log(msg)
    this.message.next(msg);

  }

  // msgEffect = createEffect(() => {
  //   return this.actions.pipe(
  //     ofType(
  //       NotificationActions.loadNotifications,
  //       // NotificationActions.notificationsSuccess
  //     ),
  //     exhaustMap((type) => {
  //       console.log(type);
  //       debugger;

  //       return of(type).pipe(
  //         map((msg:any) => {
  //           console.log(msg)
  //           console.log(type)
  //           debugger;
  //           return NotificationActions.notificationsSuccess({ success: true, msg: 'Success' });
  //         })
  //       )

  //     })
  //   )
  // })

}
