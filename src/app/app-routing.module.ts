import { NgModule }                                from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: '**',
    redirectTo: '/chat'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      {
        useHash: true,
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }