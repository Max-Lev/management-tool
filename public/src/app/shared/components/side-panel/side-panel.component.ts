import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NameInputComponent } from '../name-input/name-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit, AfterViewInit {

  eventsForm: FormGroup;

  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuiler: FormBuilder) {

  }


  ngOnInit(): void {
    this.eventsForm = this.formBuiler.group({
      event: new FormControl<string | null>(null, [Validators.required]),
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


}