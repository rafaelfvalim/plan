import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'processos', loadChildren: './processos/processos.module#ProcessosPageModule' },
  { path: 'prazos', loadChildren: './prazos/prazos.module#PrazosPageModule' },
  { path: 'processo', loadChildren: './processo/processo.module#ProcessoPageModule' },
  { path: 'processo/:id', loadChildren: './processo/processo.module#ProcessoPageModule' },
  { path: 'audiencia', loadChildren: './audiencia/audiencia.module#AudienciaPageModule' },
  { path: 'evento', loadChildren: './evento/evento.module#EventoPageModule' },
  { path: 'prazo', loadChildren: './prazo/prazo.module#PrazoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
