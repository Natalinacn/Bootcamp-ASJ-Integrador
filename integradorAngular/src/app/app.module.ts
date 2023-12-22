import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PurchaseAddFormComponent } from './components/purchaseOrders/purchase-add-form/purchase-add-form.component';
import { PurchaseListComponent } from './components/purchaseOrders/purchase-list/purchase-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductAddFormComponent } from './components/products/product-add-form/product-add-form.component';
import { ProviderAddFormComponent } from './components/providers/provider-add-form/provider-add-form.component';
import { ProviderListComponent } from './components/providers/provider-list/provider-list.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    PurchaseAddFormComponent,
    PurchaseListComponent,
    ProductListComponent,
    ProductAddFormComponent,
    ProviderAddFormComponent,
    ProviderListComponent,
    HomeComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
