import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [ThemeSelectorComponent],
  exports: [ThemeSelectorComponent]
})
export class UiThemeSelectorModule {}
