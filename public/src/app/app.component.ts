import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ModeState } from './store/mode/reducers/mode.reducer';
import { modeStateSelector, selectModeState } from './store/mode/selectors/mode.selectors';
import { ManagementState } from './store/reducers';
import { Observable } from 'rxjs';
import { CLOSE_MODE_ACTION, MODE_TYPE_ENUM } from './store/mode/actions/mode.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  modeState$: Observable<ModeState>;

  sidebarVisible: boolean = false;

  constructor(private store: Store<ManagementState>) {
    this.modeState$ = this.store.pipe(select(selectModeState));
  }

  ngOnInit(): void {

  }

  hide() {
    this.store.dispatch(CLOSE_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.CLOSE } }))
  }

}
