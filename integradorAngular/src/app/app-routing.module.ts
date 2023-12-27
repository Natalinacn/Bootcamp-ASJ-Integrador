import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderListComponent } from './components/providers/provider-list/provider-list.component';
import { ProviderAddFormComponent } from './components/providers/provider-add-form/provider-add-form.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductAddFormComponent } from './components/products/product-add-form/product-add-form.component';
import { PurchaseListComponent } from './components/purchaseOrders/purchase-list/purchase-list.component';
import { PurchaseAddFormComponent } from './components/purchaseOrders/purchase-add-form/purchase-add-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'proveedores/listado', component: ProviderListComponent},
  {path: 'proveedores/formulario', component: ProviderAddFormComponent},
  {path: 'productos/listado', component: ProductListComponent},
  {path: 'productos/formulario', component: ProductAddFormComponent},
  {path: 'productos/formulario/:id', component: ProductAddFormComponent},
  {path: 'ordenes/listado', component: PurchaseListComponent},
  {path: 'ordenes/formulario', component: PurchaseAddFormComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
