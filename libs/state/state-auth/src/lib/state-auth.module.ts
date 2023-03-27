import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { DataAccessAuthModule } from '@chat-client/data-access/data-access-auth';
import { AuthFacade } from './+state/auth.facade';
import { UtilTokenServiceModule } from '@chat-client/util/util-token-service';

@NgModule({
  imports: [
    CommonModule,
    DataAccessAuthModule,
    UtilTokenServiceModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthFacade],
})
export class StateAuthModule {}
