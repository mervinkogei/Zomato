import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestrauntItemsComponent } from './pages/restraunt-items/restraunt-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { FormsModule } from '@angular/forms';
// import {HttpClient} from '@angular/common/http/'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    CategoriesComponent,
    RestrauntItemsComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
