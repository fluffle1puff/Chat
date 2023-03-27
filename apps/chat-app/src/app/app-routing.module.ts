import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { TokenStorageService } from '@chat-client/util/util-token-service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chats',
  },
  {
    path: 'auth',
    loadChildren: () => import('@chat-client/feature/feature-auth').then((m) => m.FeatureAuthModule),
  },
  {
    path: 'chats',
    canMatch: [() => inject(TokenStorageService).isTokenValid() ? true : inject(Router).navigateByUrl('/auth/login')],
    loadChildren: () => import('@chat-client/feature/feature-chat').then((m) => m.FeatureChatModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
