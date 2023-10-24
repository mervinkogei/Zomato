import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestrauntItemsComponent } from './pages/restraunt-items/restraunt-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

const routes: Routes = [
  {path:'', component: CategoriesComponent},
  {path:'login', component: LoginComponent},
  {path:'foodcategory', component: CategoriesComponent},
  {path:'restraurant-items', component: RestrauntItemsComponent},
  {path:'create-order', component: CreateOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
