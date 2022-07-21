import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ShopmenuComponent } from './components/shopmenu/shopmenu.component';
import {CartComponent} from './components/cart/cart.component'
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { AddShopComponent } from './components/add-shop/add-shop.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { ProfileComponent } from './components/profile/profile.component';

// import {OrderComponent} from './components/order/order.component'
// import { CheckoutComponent } from './components/checkout/checkout.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path:'home',component:HomeComponent
  },
  {
    path:'menu/:id',component:ShopmenuComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'checkout', component: CheckoutComponent
  },
  {
    path:'thankyou', component: ThankyouComponent
  },
  {
    path:'addshop', component: AddShopComponent
  },
  {
    path:'addproduct/:id', component: AddProductComponent
  },
  {
    path: 'dashboard', component: DashboardComponent 
  },
  {
    path: 'productdet/:id', component: ProductDetailsComponent 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
