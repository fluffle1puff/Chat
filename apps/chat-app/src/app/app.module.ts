import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UiButtonModule } from '@chat-client/ui/ui-button';
import { UiHeaderModule } from '@chat-client/ui/ui-header';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '@chat-client/models';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../src/environments/environment';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { clearState } from '@chat-client/util/util-meta-reducer';
import { StateChatModule } from '@chat-client/state/state-chat';
import { UtilTokenServiceModule } from '@chat-client/util/util-token-service';
import { StateAuthModule } from '@chat-client/state/state-auth';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UiButtonModule,
    UiHeaderModule,
    StateChatModule,
    UtilTokenServiceModule,
    StateAuthModule,
    KeyboardShortcutsModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [clearState],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
