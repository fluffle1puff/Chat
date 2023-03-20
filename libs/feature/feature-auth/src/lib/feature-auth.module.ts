import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { FeatureAuthRoutingModule } from './feature-auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureAuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
  ],
})
export class FeatureAuthModule {}
