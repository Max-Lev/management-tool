import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NameInputComponent } from '../name-input/name-input.component';
import { CommonModule } from '@angular/common';
import { IEventsForm } from '../../models/events-form.model';
import { EventsState } from 'src/app/store/mode/reducers/events.reducer';
import { Store, select } from '@ngrx/store';
import { ManagementState } from 'src/app/store/reducers';
import { eventsStateSelector } from 'src/app/store/mode/selectors/events.selectors';
import { Observable } from 'rxjs';
import { EventsActions } from 'src/app/store/mode/actions/events.actions';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit, AfterViewInit {

  eventsForm: FormGroup;

  // evemtsState: Observable<EventsState>;

  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();

  @Output() saveEvent: EventEmitter<IEventsForm> = new EventEmitter();

  constructor(private formBuiler: FormBuilder,
    private store: Store<ManagementState>) {
    // this.evemtsState = this.store.pipe(select(eventsStateSelector));
  }


  ngOnInit(): void {
    this.eventsForm = this.formBuiler.group({
      name: new FormControl<string | null>(null, [Validators.required]),
      color: new FormControl<string | null>(null, [Validators.required]),
      description: new FormControl<string | null>(null, { validators: [Validators.required] })
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
