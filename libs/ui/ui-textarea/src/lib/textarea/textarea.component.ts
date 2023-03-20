import { Component, Input } from '@angular/core';
import { InputStyle } from '@chat-client/models';
import { ControlComponent } from '@chat-client/util/util-control-component';

@Component({
  selector: 'cc-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends ControlComponent<string> {
  @Input()
  placeholder = '';

  @Input()
  width?: string;

  @Input()
  rows?: number;

  @Input()
  inputStyle: InputStyle = InputStyle.Default;
}
