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

    // this.store.pipe(select(modeStateSelector)).subscribe((type: MODE_TYPE_ENUM) => {
    //   console.log('MODE_TYPE_ENUM ', type)
    // })

    // this.modeState$.subscribe((modeState: ModeState) => {
    //   console.log('ModeState ', modeState);
    //   if (modeState.type === MODE_TYPE_ENUM.ADD) {
    //     this.sidebarVisible = true;
    //   } else {
    //     this.sidebarVisible = false;
    //   }
    // })
    // this.store.subscribe((managementState: ManagementState) => {
    //   console.log('ManagementState ', managementState);
    // })
  }

  hide() {
    this.store.dispatch(CLOSE_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.CLOSE } }))
    // console.log('hide')
  }

}
