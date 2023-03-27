import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Theme } from '@chat-client/models';

@Component({
  selector: 'cc-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent {
  @Input() currentTheme: Theme = Theme.Light;

  @Output() changeTheme = new EventEmitter<Theme>();

  theme: Theme = Theme.Light;

  ThemeEnum = Theme;

  ngOnChanges(changes: SimpleChanges): void {
    this.theme = changes['currentTheme'].currentValue;
  }

  toggleTheme() {
    this.theme = this.theme === Theme.Dark ? Theme.Light : Theme.Dark;
    this.changeTheme.emit(this.theme);
  }
}
