import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ModeState } from './store/mode/reducers/mode.reducer';
import { selectModeState } from './store/mode/selectors/mode.selectors';
import { ManagementState } from './store/reducers';
import { Observable } from 'rxjs';
import { CLOSE_MODE_ACTION, MODE_TYPE_ENUM } from './store/mode/actions/mode.actions';
import { NotificationState } from './store/mode/reducers/notification.reducer';
import { NotificationSelector } from './store/mode/selectors/notification.selectors';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  modeState$: Observable<ModeState>;

  sidebarVisible: boolean = false;

  notificationState$: Observable<NotificationState>;

  constructor(private store: Store<ManagementState>,
    private messageService: MessageService) {
    this.modeState$ = this.store.pipe(select(selectModeState));
    this.notificationState$ = this.store.pipe(select(NotificationSelector));
  }

  ngOnInit(): void {

    this.notificationState$.subscribe((state: NotificationState) => {
      if (state.success) {
        this.messageService.add({ key: 'bottom-right', severity: 'success', summary: state.type, detail: state.msg });
      } else {
        this.messageService.add({ key: 'bottom-right', severity: 'error', summary: state.type, detail: state.msg });
      }
    });
  }

  hide() {
    this.store.dispatch(CLOSE_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.CLOSE } }))
  }

}
