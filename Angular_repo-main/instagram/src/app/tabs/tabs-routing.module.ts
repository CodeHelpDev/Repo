import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Tab4PageModule } from '../tab4/tab4.module';
import { Tab5PageModule } from '../tab5/tab5.module';

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
        loadChildren:()=> import('../home/home.module').then(m=>m.HomePageModule)
      },
      {
        path:'tab4',
        loadChildren:()=>import('../tab4/tab4.module').then(m=>Tab4PageModule)
      },
      {
        path:'tab5',
        loadChildren:()=>import('../tab5/tab5.module').then(m=>Tab5PageModule)
      },
      {
        path:'profile',
        loadChildren:()=>import('../profile/profile.module').then(m=>m.ProfilePageModule)
      },
      {
        path:'search',
        loadChildren:()=>import('../search/search.module').then(m=>m.SearchPageModule)
      },
      {
        path:'reels',
        loadChildren:()=>import('../reels/reels.module').then(m=>m.ReelsPageModule)
      },
      {
        path:'details',
        loadChildren:()=>import('../details/details.module').then(m=>m.DetailsPageModule)
      },
      {
        path:'post',
        loadChildren:()=>import('../post/post.module').then(m=>m.PostPageModule)
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
