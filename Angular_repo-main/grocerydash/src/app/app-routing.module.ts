import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'subcategories',
    loadChildren: () => import('./subcategories/subcategories.module').then( m => m.SubcategoriesPageModule)
  },
  {
    path: 'outofstock',
    loadChildren: () => import('./outofstock/outofstock.module').then( m => m.OutofstockPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then( m => m.BannerPageModule)
  },
  {
    path: 'deals',
    loadChildren: () => import('./deals/deals.module').then( m => m.DealsPageModule)
  },
  {
    path: 'coupans',
    loadChildren: () => import('./coupans/coupans.module').then( m => m.CoupansPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'updateproduct',
    loadChildren: () => import('./updateproduct/updateproduct.module').then( m => m.UpdateproductPageModule)
  },
  {
    path: 'viewproduct',
    loadChildren: () => import('./viewproduct/viewproduct.module').then( m => m.ViewproductPageModule)
  },
  {
    path: 'addnewproduct',
    loadChildren: () => import('./addnewproduct/addnewproduct.module').then( m => m.AddnewproductPageModule)
  },
  {
    path: 'addnewcategory',
    loadChildren: () => import('./addnewcategory/addnewcategory.module').then( m => m.AddnewcategoryPageModule)
  },
  {
    path: 'updatecategory',
    loadChildren: () => import('./updatecategory/updatecategory.module').then( m => m.UpdatecategoryPageModule)
  },
  {
    path: 'viewcategory',
    loadChildren: () => import('./viewcategory/viewcategory.module').then( m => m.ViewcategoryPageModule)
  },
  {
    path: 'addnewsubcategory',
    loadChildren: () => import('./addnewsubcategory/addnewsubcategory.module').then( m => m.AddnewsubcategoryPageModule)
  },
  {
    path: 'updatesubcat',
    loadChildren: () => import('./updatesubcat/updatesubcat.module').then( m => m.UpdatesubcatPageModule)
  },
  {
    path: 'addnewbanner',
    loadChildren: () => import('./addnewbanner/addnewbanner.module').then( m => m.AddnewbannerPageModule)
  },
  {
    path: 'updatebanner',
    loadChildren: () => import('./updatebanner/updatebanner.module').then( m => m.UpdatebannerPageModule)
  },
  {
    path: 'addnewdeal',
    loadChildren: () => import('./addnewdeal/addnewdeal.module').then( m => m.AddnewdealPageModule)
  },
  {
    path: 'view-deals',
    loadChildren: () => import('./view-deals/view-deals.module').then( m => m.ViewDealsPageModule)
  },
  {
    path: 'updatedeals',
    loadChildren: () => import('./updatedeals/updatedeals.module').then( m => m.UpdatedealsPageModule)
  },
  {
    path: 'addnewcoupan',
    loadChildren: () => import('./addnewcoupan/addnewcoupan.module').then( m => m.AddnewcoupanPageModule)
  },
  {
    path: 'updatecoupan',
    loadChildren: () => import('./updatecoupan/updatecoupan.module').then( m => m.UpdatecoupanPageModule)
  },
  {
    path: 'addnewadmin',
    loadChildren: () => import('./addnewadmin/addnewadmin.module').then( m => m.AddnewadminPageModule)
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path: 'viewnotifications',
    loadChildren: () => import('./viewnotifications/viewnotifications.module').then( m => m.ViewnotificationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
