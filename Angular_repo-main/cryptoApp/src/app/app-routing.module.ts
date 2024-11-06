import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'qwik',
    loadChildren: () => import('./qwik/qwik.module').then( m => m.QwikPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'incorrectemail',
    loadChildren: () => import('./incorrectemail/incorrectemail.module').then( m => m.IncorrectemailPageModule)
  },
  {
    path: 'correctcode',
    loadChildren: () => import('./correctcode/correctcode.module').then( m => m.CorrectcodePageModule)
  },
  {
    path: 'correctemail',
    loadChildren: () => import('./correctemail/correctemail.module').then( m => m.CorrectemailPageModule)
  },
  {
    path: 'incorrectcode',
    loadChildren: () => import('./incorrectcode/incorrectcode.module').then( m => m.IncorrectcodePageModule)
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./createaccount/createaccount.module').then( m => m.CreateaccountPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'mywallet',
    loadChildren: () => import('./mywallet/mywallet.module').then( m => m.MywalletPageModule)
  },
  {
    path: 'add-cash',
    loadChildren: () => import('./add-cash/add-cash.module').then( m => m.AddCashPageModule)
  },
  {
    path: 'cash-out',
    loadChildren: () => import('./cash-out/cash-out.module').then( m => m.CashOutPageModule)
  },
  {
    path: 'sendmoney',
    loadChildren: () => import('./sendmoney/sendmoney.module').then( m => m.SendmoneyPageModule)
  },
  {
    path: 'sendrequest',
    loadChildren: () => import('./sendrequest/sendrequest.module').then( m => m.SendrequestPageModule)
  },
  {
    path: 'passwordverification',
    loadChildren: () => import('./passwordverification/passwordverification.module').then( m => m.PasswordverificationPageModule)
  },
  {
    path: 'reviewtransaction',
    loadChildren: () => import('./reviewtransaction/reviewtransaction.module').then( m => m.ReviewtransactionPageModule)
  },
  {
    path: 'requestmoney',
    loadChildren: () => import('./requestmoney/requestmoney.module').then( m => m.RequestmoneyPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'connectedusers',
    loadChildren: () => import('./connectedusers/connectedusers.module').then( m => m.ConnectedusersPageModule)
  },
  {
    path: 'edit-info',
    loadChildren: () => import('./edit-info/edit-info.module').then( m => m.EditInfoPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
