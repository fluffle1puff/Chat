import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LabelPosition, LoginPayload } from '@chat-client/models';
import { AuthFacade } from '@chat-client/state/state-auth';

@Component({
  selector: 'chat-client-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../shared-styles/auth-form.styles.scss',
  ],
})
export class LoginComponent {
  LabelPosition = LabelPosition;
  loginForm : FormGroup;

  constructor(private authFacade: AuthFacade) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  loginUser() {
    const user: LoginPayload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authFacade.authenticateUser(user);
  }
}
