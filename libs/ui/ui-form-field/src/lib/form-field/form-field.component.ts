import { Component, Input } from '@angular/core';
import { LabelPosition } from '@chat-client/models';

@Component({
  selector: 'cc-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @Input()
  label!: string;

  @Input()
  labelPosition: LabelPosition = LabelPosition.Top;
}
