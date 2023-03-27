import { Component, ElementRef, EventEmitter, forwardRef, Input, ViewChild, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputStyle } from '@chat-client/models';
import { ControlComponent } from '@chat-client/util/util-control-component';
import { ShortcutInput } from "ng-keyboard-shortcuts";

@Component({
  selector: 'cc-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
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

  @ViewChild('textarea', { static: true }) textarea: ElementRef|undefined;

  @Output() shiftAndEnterWerePressed = new EventEmitter<boolean>();

  shortcuts: ShortcutInput[] = [];

  ngAfterViewInit(): void {
    this.shortcuts.push(
      {
          key: "shift + enter",
          preventDefault: true,
          target: this.textarea?.nativeElement,
          command: e => this.shiftAndEnterWerePressed.emit(true)
      }
    );
  }
}
