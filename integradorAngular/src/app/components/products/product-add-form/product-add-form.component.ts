import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, ProductsModel } from 'src/app/model/productModel';
import { ProductsService } from 'src/app/services/products.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { ProvidersService } from 'src/app/services/providers.service';
import { ProvidersModel } from 'src/app/model/providerModel';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css'],
})
export class ProductAddFormComponent implements OnInit {
  providers: ProvidersModel[] = [];
  categoriesData: Category[] = [];
  providersData: ProvidersModel[] = [];


  constructor(
    private productService: ProductsService,
    private providersService: ProvidersService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id!: string;

  product: ProductsModel = {
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
  };

  ngOnInit(): void {
    // Llam0 al servicio de proveedores para obtener la lista
    //this.providers = this.providersService.getProviders() || []; //VER ESTO
    console.log('Lista de proveedores en ngOnInit:', this.providers);

    this.route.paramMap.subscribe((response) => {
      let id = response.get('id');
      if (id != undefined) {
        this.id = id;
        this.getProductById(Number(id));
        console.log(this.product);
      }
    });

    // Agrega este console.log para verificar si la lista de proveedores se carga correctamente
    console.log('Lista de proveedores en ngOnInit:', this.providers);

  
    this.listCategories();
    this.listProviders();
    
  }

  onSubmit(form: NgForm) {
    console.log(this.product);
    if (this.id) {
      this.updateProduct(form);
    } else {
      this.saveProduct(form);
    }
  }

  //METODOS NUEVOS
  saveProduct(form: NgForm) {
    if (form.valid) {
      console.log(this.product);
      this.productService.createProduct(this.product).subscribe(
        (result) => {
          console.log('Producto en el CREATE', this.product);
          const modalRef = this.modalService.open(ConfirmationModalComponent);
          modalRef.componentInstance.message =
            'Producto agregado correctamente';


          setTimeout(() => {
            modalRef.close('timeout');
            this.router.navigate(['/productos/listado']);
          }, 2000);

          modalRef.result.then(
            (result) => {
              console.log('Modal cerrado', result);
            },
            (reason) => {
              console.log('Modal descartado', reason);
            }
          );
        },
        (error) => {
          console.log('Producto en el error de save', this.product);
          console.error('Error al agregar el producto', error);
        }
      );
    }
  }

  updateProduct(form: NgForm) {
    if (form.valid) {
      this.productService
        .updateProduct(this.product.idProduct, this.product)
        .subscribe((result) => {
          console.log('Producto actualizado exitosamente:', result);
        });

      const modalRef = this.modalService.open(ConfirmationModalComponent);
      modalRef.componentInstance.message = 'Producto editado correctamente';

      setTimeout(() => {
        modalRef.close('timeout');
        this.router.navigate(['/productos/listado']);
      }, 2000);
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

  listCategories() {
    this.productService.getCategories().subscribe((data) => {
      console.log("Lista de categorias ", this.categoriesData);
      this.categoriesData = data;
      console.log("Lista de categorias ", this.categoriesData);
    });
  }

  listProviders(){
    this.providersService.getProviders().subscribe((data)=>{
        this.providersData = data;
      });
  }

  getProductById(idProduct: number) {
    this.productService.getProductById(idProduct).subscribe(
      (data) => {
        this.product = data;
        console.log(this.product);
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }
  
}
