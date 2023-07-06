import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { EventsActions } from 'src/app/store/mode/actions/events.actions';
import { EventsState } from 'src/app/store/mode/reducers/events.reducer';
import { eventsStateSelector } from 'src/app/store/mode/selectors/events.selectors';
import { ManagementState } from 'src/app/store/reducers';
import { IEventsForm } from '../../models/events-form.model';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePanelComponent implements OnInit, AfterViewInit {

  eventsForm: FormGroup;

  eventsState$: Observable<EventsState>;

  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();

  @Output() saveEvent: EventEmitter<IEventsForm> = new EventEmitter();


  constructor(private formBuiler: FormBuilder,
    private changeDetector: ChangeDetectorRef, private store: Store<ManagementState>) {
    this.eventsState$ = this.store.pipe(select(eventsStateSelector));
  }

  ngOnInit(): void {

    this.eventsForm = this.formBuiler.group({
      name: new FormControl<string | null>(null, [Validators.required]),
      color: new FormControl<string | null>(null, [Validators.required]),
      description: new FormControl<string | null>(null, { validators: [Validators.required] })
    });

    this.eventsState$.pipe(filter((eventsState: EventsState) => {
      return (eventsState.type === 'Events Update') ? true : false
    })).subscribe((state: EventsState) => {
      this.eventsForm.patchValue(state.payload);
      this.eventsForm.updateValueAndValidity();
      this.changeDetector.detectChanges();
    });

  }

  ngAfterViewInit(): void {
    this.eventsForm.valueChanges.subscribe(v => {
      console.log(v);
      console.log(this.eventsForm);
    });
    
  }

  cancel() {
    this.cancelEvent.emit(false);
  }

  save(eventsFormValue: IEventsForm) {
    this.saveEvent.emit(eventsFormValue)
    // this.store.dispatch(EventsActions.eventsAdd({ data: eventsFormValue }));
  }

}
