import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AtsComponent } from './components/ats/ats.component';
import { NaukriCampusHeaderComponent } from './components/naukri-campus-header/naukri-campus-header.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'ats',
     component:AtsComponent
  },
  {
    path: 'prepare',
    loadChildren: () => import('./prepare/prepare.module').then( m => m.PreparePageModule)
  },
  {
    path:'naukri-campus-header',
    component:NaukriCampusHeaderComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
