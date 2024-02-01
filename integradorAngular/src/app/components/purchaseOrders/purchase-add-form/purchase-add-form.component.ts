import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {
  ProductOrderModel,
  PurchaseOrdersModel,
} from 'src/app/model/purchaseOrderModel';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { ProvidersModel } from 'src/app/model/providerModel';
import { ProvidersService } from 'src/app/services/providers.service';
import { ProductsModel } from 'src/app/model/productModel';
import { ProductsService } from 'src/app/services/products.service';
import { OrderDetailModel } from 'src/app/model/orderDetail';

@Component({
  selector: 'app-purchase-add-form',
  templateUrl: './purchase-add-form.component.html',
  styleUrls: ['./purchase-add-form.component.css'],
})
export class PurchaseAddFormComponent implements OnInit {
  productoAgregado: boolean = false;

  providers: ProvidersModel[] = [];
  products1: ProductsModel[] = [];
  addedProducts: OrderDetailModel[] = [];

  constructor(
    private purchaseOrdersService: PurchaseOrdersService,
    private providersService: ProvidersService,
    private productsService: ProductsService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.providersService.getProviders().subscribe(
      (providers) => (this.providers = providers || []),
      (error) => console.error('Error obteniendo proveedores', error)
    );
    this.productsService.getProducts().subscribe(
      (products) => (this.products1 = products || []),
      (error) => console.error('Error obteniendo productos', error)
    );
  }

  purchaseOrder: PurchaseOrdersModel = {
    idPurchaseOrder: 0,
    orderNumber: '',
    issueDate: new Date(),
    deliveryDate: new Date(),
    receptionInfo: '',
    description: '',
    status: true,
    totalAmount: 0,
    provider: {
      idProvider: 0,
      providerCode: '',
      businessName: '',
      cuit: '',
      website: '',
      phone: '',
      email: '',
      industry: {
        idIndustry: 0,
        industry: '',
      },
      address: {
        idAddress: 0,
        streetAndNumber: '',
        postalCode: '',
        city: {
          idCity: 0,
          city: '',
          province: {
            idProvince: 0,
            province: '',
            country: {
              idCountry: 0,
              country: '',
            },
          },
        },
      },
      ivaCondition: {
        idIvaCondition: 0,
        ivaCondition: '',
      },
      responsiblePerson: {
        idResponsiblePerson: 0,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: '',
      },
      created_at: undefined,
      updated_at: undefined,
      deleted_at: undefined,
    },
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
  };
  productOrder: OrderDetailModel = {
    idOrderDetail: 0,
    quantity: 0,
    price: 0,
    product: {
      idProduct: 0,
      code: '',
      productName: '',
      category: {
        categoryId: 0,
        category: '',
      },
      provider:{
      idProvider: 0,
      providerCode: '',
      businessName: '',
      cuit: '',
      website: '',
      phone: '',
      email: '',
      industry: {
        idIndustry: 0,
        industry: '',
      },
      address: {
        idAddress: 0,
        streetAndNumber: '',
        postalCode: '',
        city: {
          idCity: 0,
          city: '',
          province: {
            idProvince: 0,
            province: '',
            country: {
              idCountry: 0,
              country: '',
            },
          }
        }
      },
      ivaCondition: {
        idIvaCondition: 0,
        ivaCondition: '',
      },
      responsiblePerson: {
        idResponsiblePerson: 0,
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: '',
      },
      created_at: undefined,
      updated_at: undefined,
      deleted_at: undefined,
        },
      description: '',
      price: 0,
      img: '',
      created_at: undefined,
      updated_at: undefined,
      deleted_at: undefined,
    },
    purchaseOrder: this.purchaseOrder,
    createdAt: undefined,
    updatedAt: undefined        
  };

  createPurchase(form: NgForm) {
    if (form.valid) {
      this.purchaseOrdersService
        .createPurchaseOrder(this.purchaseOrder)
        .subscribe((data) => {
          for (const detail of this.addedProducts) {
            detail.purchaseOrder = data;            
          }
          this.purchaseOrdersService.createOrderDetail(this.addedProducts)
        });
      // Primero abro el modal
      const modalRef = this.modalService.open(ConfirmationModalComponent);
      modalRef.componentInstance.message =
        'Órden de compra agregado correctamente';

      // Uso setTimeout para cerrar el modal después de 2 segundos y navegar a otra página
      setTimeout(() => {
        modalRef.close('timeout');
        this.router.navigate(['/ordenes/listado']);
      }, 2000);

      // Manejo el resultado de la promesa
      modalRef.result.then(
        (result) => {
          console.log('Modal cerrado', result);
        },
        (reason) => {
          console.log('Modal descartado', reason);
        }
      );
    }
  }
  
  cargarProductoaDetail(productName : string){
    this.productOrder.product = 
    this.products1.find((prod)=>
    productName === prod.productName
    );
    this.cargarPrecio(this.productOrder.product!);
  }

  cargarPrecio(product : ProductsModel) {
      this.productOrder.price = product.price;
  }

  agregarProducto() {
    this.productoAgregado = true;

    this.cargarPrecio(this.productOrder.product!);
    console.log(this.productOrder);

    this.addedProducts.push(structuredClone(this.productOrder));
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.message = 'Producto agregado correctamente';
  }

  calcularTotal(): number {
    let total = 0;

    // Recorro los productos agregados y sumar los precios
    for (const producto of this.addedProducts) {
      if (producto.price) {
        total += producto.price * producto.quantity;
      }
    }

    // Almaceno el total en la propiedad totalAmount
    this.purchaseOrder.totalAmount = total;
    return total;
  }
}
