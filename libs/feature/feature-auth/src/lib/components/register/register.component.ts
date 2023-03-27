import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from '@chat-client/models';
import { AuthFacade } from '@chat-client/state/state-auth';

@Component({
  selector: 'chat-client-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../../shared-styles/auth-form.styles.scss',
  ],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private authFacade: AuthFacade) {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.minLength(3)),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  registerUser() {
    const newUser: NewUser = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.authFacade.registerUser(newUser);
  }
}
