import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './components/common/common.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ourevent',
    loadChildren: () => import('./ourevent/ourevent.module').then( m => m.OureventPageModule)
  },
  {
    path:'common',
    component:CommonComponent
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'participants',
    loadChildren: () => import('./participants/participants.module').then( m => m.ParticipantsPageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'polls',
    loadChildren: () => import('./polls/polls.module').then( m => m.PollsPageModule)
  },
  {
    path: 'checkin',
    loadChildren: () => import('./checkin/checkin.module').then( m => m.CheckinPageModule)
  },
  {
    path: 'scenario',
    loadChildren: () => import('./scenario/scenario.module').then( m => m.ScenarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
