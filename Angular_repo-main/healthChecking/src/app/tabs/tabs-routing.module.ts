import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path:'homescreen',
        loadChildren:()=>import('../homescreen/homescreen.module').then(m=>m.HomescreenPageModule)
      },
      {
        path:'calendar',
        loadChildren:()=>import('../calendar/calendar.module').then(m=>m.CalendarPageModule)
      },
      {
        path:'profile',
        loadChildren:()=>import('../profile/profile-routing.module').then(m=>m.ProfilePageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
