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
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path:'main',
        loadChildren:()=>import('../mainpage/mainpage.module').then(m=>m.MainpagePageModule)
      },
      {
        path:'categories',
        loadChildren:()=>import('../categories/categories.module').then(m=>m.CategoriesPageModule)
      },
      {
        path:'favourite',
        loadChildren:()=>import('../favourite/favourite.module').then(m=>m.FavouritePageModule)
      },
      {
        path:'profile',
        loadChildren:()=>import('../profile/profile.module').then(m=>m.ProfilePageModule)
      },
      {
        path:'bag',
        loadChildren:()=>import('../bag/bag.module').then(m=>m.BagPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
