import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

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
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'new-cars',
    loadChildren: () => import('./new-cars/new-cars.module').then( m => m.NewCarsPageModule)
  },
  {
    path: 'likes',
    loadChildren: () => import('./likes/likes.module').then( m => m.LikesPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'ordersx',
    loadChildren: () => import('./ordersx/ordersx.module').then( m => m.OrdersxPageModule)
  },
  {
    path: 'myvehicles',
    loadChildren: () => import('./myvehicles/myvehicles.module').then( m => m.MyvehiclesPageModule)
  },
  {
    path: 'profile-setting',
    loadChildren: () => import('./profile-setting/profile-setting.module').then( m => m.ProfileSettingPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
