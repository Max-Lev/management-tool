import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ModeState } from './store/mode/reducers/mode.reducer';
import { modeStateSelector, selectModeState } from './store/mode/selectors/mode.selectors';
import { ManagementState } from './store/reducers';
import { Observable } from 'rxjs';
import { MODE_TYPE_ENUM } from './store/mode/actions/mode.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  modeState$: Observable<ModeState>;

  constructor(private store: Store<ManagementState>) {
    this.modeState$ = this.store.pipe(select(selectModeState));
  }

  ngOnInit(): void {

    this.store.pipe(select(modeStateSelector)).subscribe((type: MODE_TYPE_ENUM) => {
      console.log('MODE_TYPE_ENUM ', type)
    })

    this.modeState$.subscribe((modeState: ModeState) => {
      console.log('ModeState ', modeState);
    })
    this.store.subscribe((managementState: ManagementState) => {
      console.log('ManagementState ', managementState);
    })
  }

}
