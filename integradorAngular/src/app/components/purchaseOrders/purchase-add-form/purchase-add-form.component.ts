import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductOrderModel, PurchaseOrdersModel } from 'src/app/model/purchaseOrderModel';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { ProvidersModel } from 'src/app/model/providerModel';
import { ProvidersService } from 'src/app/services/providers.service';
import { ProductsModel } from 'src/app/model/productModel';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-purchase-add-form',
  templateUrl: './purchase-add-form.component.html',
  styleUrls: ['./purchase-add-form.component.css']
})
export class PurchaseAddFormComponent implements OnInit{

  productoAgregado: boolean = false;

  productosAgregados: { product: string, quantity: number, price: number }[] = [];

  providers: ProvidersModel[] = []; 
  products1: ProductsModel[] = [];
  
  constructor(
    private purchaseOrdersService: PurchaseOrdersService,
    private providersService: ProvidersService, 
    private productsService : ProductsService,
    private modalService: NgbModal,
    private router: Router){}

  ngOnInit(): void {
    this.providers = this.providersService.getProvider() || [];
    this.products1 = this.productsService.getProduct() || [];
  }

  purchaseOrder: PurchaseOrdersModel = {
  id: "0",
  OrderNumber: '',
  issueDate: new Date(), 
  deliveryDate: new Date(), 
  receptionInfo: '',
  description: '',
  provider: '',
  products: [],
  status: true,
  totalAmount: 0
}

productOrder: ProductOrderModel = {
  product: '',
  quantity: 1,
  price: 0
}

createPurchase(form:NgForm){

  if(form.valid){
    this.purchaseOrdersService.createPurchaseOrder(this.purchaseOrder);

          // Primero abro el modal
          const modalRef = this.modalService.open(ConfirmationModalComponent);
          modalRef.componentInstance.message = 'Órden de compra agregado correctamente';
    
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


cargarPrecio(nombre:string){

  console.log(nombre)
  const productName = this.products1.find(prod=> prod.productName === nombre)!;
  console.log(this.products1)
  this.productOrder.price = productName.price;
  console.log(productName)
  // this.productOrder.price = productName?.price;


}

agregarProducto() {
  this.productoAgregado = true;

  this.cargarPrecio(this.productOrder.product);
console.log(this.productOrder)

  this.productosAgregados.push({
    product: this.productOrder.product,
    quantity: this.productOrder.quantity,
    price: this.productOrder.price
    
});

this.purchaseOrder.products.push({
  product: this.productOrder.product,
  quantity: this.productOrder.quantity,
  price: this.productOrder.price
  
});
console.log(this.productosAgregados);

const modalRef = this.modalService.open(ConfirmationModalComponent);
modalRef.componentInstance.message = 'Producto agregado correctamente';

}

calcularTotal(): number {
  let total = 0;

  // Recorro los productos agregados y sumar los precios
  for (const producto of this.productosAgregados) {
    if (producto.price) {
      total += producto.price * producto.quantity;
    }
  }

  return total;
}

}
