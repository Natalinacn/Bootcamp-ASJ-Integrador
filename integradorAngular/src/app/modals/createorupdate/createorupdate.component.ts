import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/model/productModel';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-createorupdate',
  templateUrl: './createorupdate.component.html',
  styleUrls: ['./createorupdate.component.css']
})
export class CreateorupdateComponent {

  @Input() modalTitle: string = '';
  @Input() action: string = '';
  @Input() category!: Category;

  constructor(public activeModal: NgbActiveModal,
    private categoriesService: CategoriesService) {}


    submitEntity() {
      if (this.action === 'Crear') {
        this.createCategory();
      } else if (this.action === 'Actualizar') {
        this.updateCategory();
      }
    }

    updateCategory() {
      this.categoriesService.updateCategory(this.category.categoryId, this.category).subscribe(() => {
        this.activeModal.close('success');
      }, (error) => {
        console.error('Error al actualizar la categoría', error);
      });
    }
    
  
  
    createCategory() {
      this.categoriesService.createCategory(this.category).subscribe(() => {
        this.activeModal.close('success');
      }, (error) => {
        console.error('Error al crear la categoría', error);
      });
    }

    dismissModal() {
      this.activeModal.dismiss('cancel');
    }
}


