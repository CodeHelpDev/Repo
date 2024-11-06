import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { HomePageModule } from '../home/home.module';
import { FoodPageModule } from '../food/food.module';

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
        path:'home',
        loadChildren:()=>import('../home/home.module').then(m=>m.HomePageModule)
      },      
      {
        path:'food',
        loadChildren:()=>import('../food/food.module').then(m=>m.FoodPageModule)
      },
      {
        path:'parcel',
        loadChildren:()=>import('../parcel/parcel.module').then(m=>m.ParcelPageModule)
      },
      {
        path:'electric',
        loadChildren:()=>import('../electric/electric.module').then(m=>m.ElectricPageModule)
      },
      {
        path:'profile',
        loadChildren:()=>import('../profile/profile.module').then(m=>m.ProfilePageModule)
      },
      {
        path:'ridehistory',
        loadChildren:()=>import('../ridehistory/ridehistory.module').then(m=>m.RidehistoryPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
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
