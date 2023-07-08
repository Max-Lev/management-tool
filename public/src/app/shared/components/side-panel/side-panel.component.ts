import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { EventsActions } from 'src/app/store/mode/actions/events.actions';
import { EventsState } from 'src/app/store/mode/reducers/events.reducer';
import { eventsStateSelector } from 'src/app/store/mode/selectors/events.selectors';
import { ManagementState } from 'src/app/store/reducers';
import { IEventsForm } from '../../models/events-form.model';
import { modeStateSelector } from 'src/app/store/mode/selectors/mode.selectors';
import { MODE_TYPE_ENUM } from 'src/app/store/mode/actions/mode.actions';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

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

  @Output() saveEvent: EventEmitter<{
    payload: IEventsForm | IProduct,
    action: MODE_TYPE_ENUM
  }> = new EventEmitter();

  modeState$;

  actionType: MODE_TYPE_ENUM;

  product: IProduct;

  constructor(private formBuiler: FormBuilder,
    private changeDetector: ChangeDetectorRef, private store: Store<ManagementState>) {
    this.eventsState$ = this.store.pipe(select(eventsStateSelector));
    this.modeState$ = this.store.pipe(select(modeStateSelector));

  }

  ngOnInit(): void {

    this.eventsForm = this.formBuiler.group({
      name: new FormControl<string | null>(null, [Validators.required]),
      color: new FormControl<string | null>(null, [Validators.required]),
      description: new FormControl<string | null>(null, { validators: [Validators.required] })
    });

    this.eventsState$.pipe(filter((eventsState: EventsState) => {
      return (eventsState.type === '[Event] Events Select') ? true : false
    })).subscribe((state: EventsState) => {
      this.product = state.data;
      this.eventsForm.patchValue(state.data);
      this.eventsForm.updateValueAndValidity();
      this.changeDetector.detectChanges();
    });

    this.modeState$.subscribe((action: MODE_TYPE_ENUM) => {
      this.actionType = action;
    });

  }

  ngAfterViewInit(): void {

  }

  cancel() {
    this.cancelEvent.emit(false);
  }

  save(eventsFormValue: IEventsForm) {
    // TODO: ADD UPDATE

    if (this.actionType === MODE_TYPE_ENUM.EDIT) {
      this.product = { ...this.product, ...eventsFormValue };
      this.saveEvent.emit({ payload: this.product, action: this.actionType })
    }
    this.saveEvent.emit({ payload: eventsFormValue, action: this.actionType })

  }

}
