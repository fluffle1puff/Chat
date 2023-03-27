import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { FeatureAuthRoutingModule } from './feature-auth-routing.module';
import { UiInputModule } from '@chat-client/ui/ui-input';
import { UiFormFieldModule } from '@chat-client/ui/ui-form-field';
import { UiButtonModule } from '@chat-client/ui/ui-button';
import { ReactiveFormsModule } from '@angular/forms';
import { DataAccessAuthModule } from '@chat-client/data-access/data-access-auth';
import { StateAuthModule } from '@chat-client/state/state-auth';

@NgModule({
  imports: [
    CommonModule,
    FeatureAuthRoutingModule,
    UiInputModule,
    UiFormFieldModule,
    UiButtonModule,
    ReactiveFormsModule,
    DataAccessAuthModule,
    StateAuthModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
  ],
})
export class FeatureAuthModule {}
