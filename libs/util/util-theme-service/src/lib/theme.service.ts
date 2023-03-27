import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Theme } from '@chat-client/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.Dark);

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme.next(localStorage.getItem('theme') as Theme || Theme.Dark);
    this.document.body.classList.add(this.getTheme());
  }

  setTheme(theme: Theme) {
    this.document.body.classList.remove(this.getTheme());
    this.document.body.classList.add(theme);
    this.theme.next(theme);
    localStorage.setItem('theme', theme);
  }

  getTheme() {
    return this.theme.getValue();
  }
}
