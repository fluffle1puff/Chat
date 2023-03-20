import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'auth',
    loadChildren: () => import('@chat-client/feature/feature-auth').then((m) => m.FeatureAuthModule),
  },

  {
    path: '',
    children: [
      {
        path: 'chats',
        loadChildren: () => import('@chat-client/feature/feature-chat').then((m) => m.FeatureChatModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
