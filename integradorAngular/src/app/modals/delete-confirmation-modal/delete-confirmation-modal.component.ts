import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.css']
})
export class DeleteConfirmationModalComponent {

  @Input() message:string="";

  constructor(public activeModal: NgbActiveModal) {}

  confirmDelete() {
    this.activeModal.close('confirm');
  }

}
