import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { UtilTokenServiceModule } from '@chat-client/util/util-token-service';

@NgModule({
  imports: [
    CommonModule,
    UtilTokenServiceModule,
  ],
  providers: [AuthService]
})
export class DataAccessAuthModule {}
