import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderListComponent } from './components/providers/provider-list/provider-list.component';
import { ProviderAddFormComponent } from './components/providers/provider-add-form/provider-add-form.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductAddFormComponent } from './components/products/product-add-form/product-add-form.component';
import { PurchaseListComponent } from './components/purchaseOrders/purchase-list/purchase-list.component';
import { PurchaseAddFormComponent } from './components/purchaseOrders/purchase-add-form/purchase-add-form.component';
import { HomeComponent } from './components/home/home.component';
import { PurchaseDetailComponent } from './components/purchaseOrders/purchase-detail/purchase-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ProviderDetailComponent } from './components/providers/provider-detail/provider-detail.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';


const routes: Routes = [
  {
    path: 'proveedores',
    children: [
      { path: 'listado', component: ProviderListComponent },
      { path: 'formulario', component: ProviderAddFormComponent },
      { path: 'formulario/:id', component: ProviderAddFormComponent },
      { path: 'detalle/:id', component: ProviderDetailComponent },
    ],
  },
  {
    path: 'productos',
    children: [
      { path: 'listado', component: ProductListComponent },
      { path: 'formulario', component: ProductAddFormComponent },
      { path: 'formulario/:id', component: ProductAddFormComponent },
      { path: 'detalle/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'ordenes',
    children: [
      { path: 'listado', component: PurchaseListComponent },
      { path: 'formulario', component: PurchaseAddFormComponent },
      { path: 'detalle/:id', component: PurchaseDetailComponent },
    ],
  },
  {
    path: 'configuracion',
    children: [
      { path: 'categorias', component: CategoriesComponent },
      { path: 'rubros', component: IndustriesComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegisterComponent},
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecciona a /login por defecto
  { path: '**', redirectTo: '/login' }, // Redirige a /login si no encuentra la ruta
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
