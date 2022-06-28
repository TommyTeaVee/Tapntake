import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ShopmenuComponent } from './components/shopmenu/shopmenu.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { SearchComponent } from './components/search/search.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopmenuComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouComponent,
    SearchComponent,
    GetstartedComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
