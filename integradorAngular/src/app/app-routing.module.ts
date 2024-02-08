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
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'proveedores',
    data: { breadcrumb: 'Proveedores', url: '#'  },
    children: [
      {
        path: 'listado',
        component: ProviderListComponent,
        data: { breadcrumb: 'Listado' },
      },
      {
        path: 'formulario',
        component: ProviderAddFormComponent,
        data: { breadcrumb: 'Formulario' },
      },
      {
        path: 'formulario/:id',
        component: ProviderAddFormComponent,
        data: { breadcrumb: 'Formulario' },
      },
      {
        path: 'detalle/:id',
        component: ProviderDetailComponent,
        data: { breadcrumb: 'Detalle' },
      },
    ],
  },
  {
    path: 'productos',
    data: { breadcrumb: 'Productos', url: '#' },
    children: [
      {
        path: 'listado',
        component: ProductListComponent,
        data: { breadcrumb: 'Listado' },
      },
      {
        path: 'formulario',
        component: ProductAddFormComponent,
        data: { breadcrumb: 'Formulario' },
      },
      {
        path: 'formulario/:id',
        component: ProductAddFormComponent,
        data: { breadcrumb: 'Formulario' },
      },
      {
        path: 'detalle/:id',
        component: ProductDetailComponent,
        data: { breadcrumb: 'Detalle' },
      },
    ],
  },
  {
    path: 'ordenes',
    data: { breadcrumb: 'Ordenes', url: '#' },
    children: [
      {
        path: 'listado',
        component: PurchaseListComponent,
        data: { breadcrumb: 'Listado' },
      },
      {
        path: 'formulario',
        component: PurchaseAddFormComponent,
        data: { breadcrumb: 'Formulario' },
      },
      {
        path: 'detalle/:id',
        component: PurchaseDetailComponent,
        data: { breadcrumb: 'Detalle' },
      },
    ],
  },
  {
    path: 'configuracion',
    data: { breadcrumb: 'Configuracion', url: '#' },
    children: [
      {
        path: 'categorias',
        component: CategoriesComponent,
        data: { breadcrumb: 'Categorias' },
      },
      {
        path: 'rubros',
        component: IndustriesComponent,
        data: { breadcrumb: 'Rubros' },
      },
    ],
  },

  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  {
    path: 'registro',
    component: RegisterComponent,
    data: { breadcrumb: 'Registro' },
  },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecciona a /login por defecto
  { path: '**', redirectTo: '/home' }, // Redirige a /login si no encuentra la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
