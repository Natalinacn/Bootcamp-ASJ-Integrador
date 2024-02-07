import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { CreateorupdateComponent } from 'src/app/modals/createorupdate/createorupdate.component';
import { DeleteConfirmationModalComponent } from 'src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { Category } from 'src/app/model/productModel';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoriesData: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listCategories();
  }

  category: Category = {
    categoryId: 0,
    category: '',
  };

  // createCategory(form:NgForm){
  //   if(form.valid){
  //     this.categoriesService.createCategory(this.category).subscribe((data)=>{
  //       const modalRef = this.modalService.open(ConfirmationModalComponent);
  //       modalRef.componentInstance.message =
  //         'Categoría agregada correctamente';
  //         setTimeout(() => {
  //           modalRef.close('timeout');
  //           this.router.navigate(['/categorias/listado']);
  //         }, 2000);

  //         modalRef.result.then(
  //           (result) => {
  //             console.log('Modal cerrado', result);
  //           },
  //           (reason) => {
  //             console.log('Modal descartado', reason);
  //           }
  //         );
  //       },
  //       (error) => {
  //         console.error('Error al agregar la categoría', error);
  //     });
  //   }

  // }

  listCategories() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categoriesData = data;
    });
  }

  deleteCategory(categoryId: number) {
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);
    modalRef.componentInstance.message =
      '¿Está seguro de que desea eliminar esta categoría?';
    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          this.categoriesService
            .deleteCategory(Number(categoryId))
            .subscribe(() => {
              this.listCategories();
            });
        }
      },
      (reason) => {
        console.log('Modal de confirmación cerrado sin confirmar: ', reason);
      }
    );
  }

  updateCategory(categoryId: number) {
    this.categoriesService.getCategoryById(categoryId).subscribe(
      (data) => {
        const modalRef = this.modalService.open(CreateorupdateComponent);
        modalRef.componentInstance.modalTitle = 'Editar Categoría';
        modalRef.componentInstance.action = 'Actualizar';
        modalRef.componentInstance.category = data;
        modalRef.result.then((result) => {
          if (result === 'success') {
            // Actualiza la categoría utilizando el método updateCategory
            this.categoriesService.updateCategory(categoryId, modalRef.componentInstance.category).subscribe(
              () => {
                this.listCategories(); // Actualiza la lista de categorías después de actualizar una
              },
              (error) => {
                console.error('Error al actualizar la categoría', error);
              }
            );
          }
        });
      },
      (error) => {
        console.error('Error al obtener la categoría', error);
      }
    );
  }
  

  getCategoryById(categoryId: number) {
    this.categoriesService.getCategoryById(categoryId).subscribe(
      (data) => {
        this.category = data;
      },
      (error) => {
        console.error('Error al obtener la categoria', error);
      }
    );
  }

  //Manejo del modal

  openCreateCategoryModal() {
    const modalRef = this.modalService.open(CreateorupdateComponent); // Abre el modal
    modalRef.componentInstance.modalTitle = 'Crear Categoría'; // Asigna el título del modal
    modalRef.componentInstance.action = 'Crear'; // Asigna la acción del modal
    modalRef.componentInstance.category = this.category; // Pasa la categoría al modal si es necesario
    modalRef.result.then(
      (result) => {
        if (result === 'success') {
          this.listCategories(); // Actualiza la lista de categorías después de crear una nueva
        }
      },
      (reason) => {
        console.log('Modal cerrado sin acción: ', reason);
      }
    );
  }  
  
  
}
