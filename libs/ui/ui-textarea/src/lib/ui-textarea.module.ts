import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea/textarea.component';
import { FormsModule } from '@angular/forms';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KeyboardShortcutsModule,
  ],
  declarations: [TextareaComponent],
  exports: [TextareaComponent]
})
export class UiTextareaModule {}
