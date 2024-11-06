import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'visualsearch',
    loadChildren: () => import('./visualsearch/visualsearch.module').then( m => m.VisualsearchPageModule)
  },
  {
    path: 'searchbyimage',
    loadChildren: () => import('./searchbyimage/searchbyimage.module').then( m => m.SearchbyimagePageModule)
  },
  {
    path: 'finding-similar-results',
    loadChildren: () => import('./finding-similar-results/finding-similar-results.module').then( m => m.FindingSimilarResultsPageModule)
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'mainpage2',
    loadChildren: () => import('./mainpage2/mainpage2.module').then( m => m.Mainpage2PageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'bag',
    loadChildren: () => import('./bag/bag.module').then( m => m.BagPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'paymentmethod',
    loadChildren: () => import('./paymentmethod/paymentmethod.module').then( m => m.PaymentmethodPageModule)
  },
  {
    path: 'shippingaddress',
    loadChildren: () => import('./shippingaddress/shippingaddress.module').then( m => m.ShippingaddressPageModule)
  },
  {
    path: 'ordersuccess',
    loadChildren: () => import('./ordersuccess/ordersuccess.module').then( m => m.OrdersuccessPageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'viewaddress',
    loadChildren: () => import('./viewaddress/viewaddress.module').then( m => m.ViewaddressPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
