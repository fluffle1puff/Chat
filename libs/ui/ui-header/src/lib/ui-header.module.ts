import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiThemeSelectorModule } from '@chat-client/ui/ui-theme-selector';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    UiThemeSelectorModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class UiHeaderModule {}
