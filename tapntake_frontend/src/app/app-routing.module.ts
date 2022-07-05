import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopmenuComponent } from './components/shopmenu/shopmenu.component';
import {CartComponent} from './components/cart/cart.component'
import { CheckoutComponent } from './components/checkout/checkout.component';

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
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
