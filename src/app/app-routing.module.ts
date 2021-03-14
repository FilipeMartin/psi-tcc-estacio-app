import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [GuestGuard],
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'series',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'perfil',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
