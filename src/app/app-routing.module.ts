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
    path: 'avaliacoes',
    loadChildren: () => import('./pages/avaliacoes/avaliacoes.module').then( m => m.AvaliacoesPageModule)
  },  {
    path: 'unidades',
    loadChildren: () => import('./pages/unidades/unidades.module').then( m => m.UnidadesPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./pages/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
