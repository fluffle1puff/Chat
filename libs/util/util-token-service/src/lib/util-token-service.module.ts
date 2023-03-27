import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenStorageService } from './token.service';

@NgModule({
  imports: [CommonModule],
  providers: [TokenStorageService]
})
export class UtilTokenServiceModule {}
