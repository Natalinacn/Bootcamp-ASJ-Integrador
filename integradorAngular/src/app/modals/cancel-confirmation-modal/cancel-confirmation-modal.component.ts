import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cancel-confirmation-modal',
  templateUrl: './cancel-confirmation-modal.component.html',
  styleUrls: ['./cancel-confirmation-modal.component.css']
})
export class CancelConfirmationModalComponent {

  @Input() message: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  confirmCancel() {
    this.activeModal.close('confirm');
  }

}
