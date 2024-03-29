import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import { CommonModule } from '@angular/common';

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
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { DeleteConfirmationModalComponent } from './modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { CancelConfirmationModalComponent } from './modals/cancel-confirmation-modal/cancel-confirmation-modal.component';
import { PurchaseDetailComponent } from './components/purchaseOrders/purchase-detail/purchase-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { CreateorupdateComponent } from './modals/createorupdate/createorupdate.component';
import { NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProviderDetailComponent } from './components/providers/provider-detail/provider-detail.component';
import { FilterProviderPipePipe } from './pipes/filter-provider-pipe.pipe';
import { FilterProductPipePipe } from './pipes/filter-product-pipe.pipe';
import { FilterPurchasePipePipe } from './pipes/filter-purchase-pipe.pipe';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CreateorupdateIndustryComponent } from './modals/createorupdate-industry/createorupdate-industry.component';




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
    ConfirmationModalComponent,
    DeleteConfirmationModalComponent,
    CancelConfirmationModalComponent,
    PurchaseDetailComponent,
    LoginComponent,
    RegisterComponent,
    ErrorModalComponent,
    CategoriesComponent,
    IndustriesComponent,
    CreateorupdateComponent,
    ProductDetailComponent,
    ProviderDetailComponent,
    FilterProviderPipePipe,
    FilterProductPipePipe,
    FilterPurchasePipePipe,
    BreadcrumbComponent,
    CreateorupdateIndustryComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
