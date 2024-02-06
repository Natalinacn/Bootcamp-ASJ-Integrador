import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PurchaseOrdersModel } from 'src/app/model/purchaseOrderModel';
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

  id!: string;
  providers: ProvidersModel[] = [];
  products1: ProductsModel[] = [];
  addedProducts: OrderDetailModel[] = [];

  constructor(
    private purchaseOrdersService: PurchaseOrdersService,
    private providersService: ProvidersService,
    private productsService: ProductsService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.providersService.getActivatedProviders().subscribe(
      (providers) => (this.providers = providers || []),
      (error) => console.error('Error obteniendo proveedores', error)
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
      img: '',
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
      createdAt: undefined,
      updatedAt: undefined,
      deletedAt: undefined,
    },
    createdAt: undefined,
    updatedAt: undefined,
    deletedAt: undefined,
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
      provider: {
        idProvider: 0,
        providerCode: '',
        businessName: '',
        img: '',
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
        createdAt: undefined,
        updatedAt: undefined,
        deletedAt: undefined,
      },
      description: '',
      price: 0,
      img: '',
      createdAt: null,
      updatedAt: null,
      deletedAt: null,
    },
    purchaseOrder: this.purchaseOrder,
    createdAt: undefined,
    updatedAt: undefined,
  };

  createPurchase(form: NgForm) {
    if (form.valid) {
      console.log(this.purchaseOrder);
      this.purchaseOrdersService
        .createPurchaseOrder(this.purchaseOrder)
        .subscribe((data) => {
          for (const detail of this.addedProducts) {
            detail.purchaseOrder = data;
            console.log(detail);
            this.purchaseOrdersService
              .createOrderDetail(detail)
              .subscribe((data) => {
                console.log(data);
              });
          }
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
        (result) => {},
        (reason) => {}
      );
    }
  }

  cargarProductoaDetail(productName: string) {
    this.productOrder.product = this.products1.find(
      (prod) => productName === prod.productName
    );
    this.cargarPrecio(this.productOrder.product!);
    console.log(this.productOrder.product);
  }

  cargarPrecio(product: ProductsModel) {
    this.productOrder.price = product.price;
  }

  agregarProducto() {
    let idProducts = this.addedProducts.map(
      (detalle) => detalle.product?.idProduct
    );
    if (idProducts.includes(this.productOrder.product?.idProduct)) {
      let index = this.addedProducts.findIndex(
        (detalle) =>
          detalle.product?.idProduct === this.productOrder.product?.idProduct
      );
      this.addedProducts[index].quantity += this.productOrder.quantity;
    } else {
      this.addedProducts.push(structuredClone(this.productOrder));
    }
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

  getProductsByProvider(idProvider: number) {
    this.productsService.getProductsByProvider(idProvider).subscribe((data) => {
      this.products1 = data;
    });
  }
}
