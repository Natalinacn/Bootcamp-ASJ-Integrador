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
  id!: string;
  providers: ProvidersModel[] = [];
  categoriesData: Category[] = [];
  providersData: ProvidersModel[] = [];
  formTitle: string = 'Agregar Productos';

  //ERRORES
  errorMessage: string | null = null;
  showErrorMessage: boolean = false;


  constructor(
    private productService: ProductsService,
    private providersService: ProvidersService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product: ProductsModel = {
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
      createdAt: null,
      updatedAt: null,
      deletedAt: null,
    },
    description: '',
    price: 0,
    img: '',
    createdAt: null,
    updatedAt: null,
    deletedAt: null,
  };

  ngOnInit(): void {
    // Llam0 al servicio de proveedores para obtener la lista
    //this.providers = this.providersService.getProviders() || []; //VER ESTO
    console.log('Lista de proveedores en ngOnInit:', this.providers);

    this.route.paramMap.subscribe((response) => {
      let id = response.get('id');
      if (id !== null && !isNaN(Number(id))) {
        this.id = id;
        this.getProductById(Number(id));
        this.formTitle = 'Editar Productos';
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
      this.productService.createProduct(this.product).subscribe(
        (result) => {
          console.log('Respuesta exitosa del servidor:', result); 
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
          console.error('Error en la respuesta del servidor:', error); 
          if (error.status !== 201) {
            this.errorMessage = error.error;
            this.showErrorMessage = true;
          }
        }
     
      );
      this.showErrorMessage = false;   
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
      console.log('Lista de categorias ', this.categoriesData);
      this.categoriesData = data;
      console.log('Lista de categorias ', this.categoriesData);
    });
  }

  listProviders() {
    this.providersService.getActivatedProviders().subscribe((data) => {
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
