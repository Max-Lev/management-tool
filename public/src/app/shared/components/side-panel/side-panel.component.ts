import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NameInputComponent } from '../name-input/name-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  // standalone: true,
  // imports: [CommonModule,
  //   ReactiveFormsModule],
  // providers: [NameInputComponent],

})
export class SidePanelComponent implements OnInit, AfterViewInit {

  eventsForm: FormGroup;

  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuiler: FormBuilder) {

  }


  ngOnInit(): void {
    this.eventsForm = this.formBuiler.group({
      event: new FormControl<string | null>(null),
      color: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null)
    })

  }

  ngAfterViewInit(): void {
    this.eventsForm.valueChanges.subscribe(v => {
      console.log(v);
    });
  }

  cancel() {
    this.cancelEvent.emit(false);
  }


}
