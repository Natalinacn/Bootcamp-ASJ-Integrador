import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Industry } from 'src/app/model/industryModel';
import { IndustriesService } from 'src/app/services/industries.service';

@Component({
  selector: 'app-createorupdate-industry',
  templateUrl: './createorupdate-industry.component.html',
  styleUrls: ['./createorupdate-industry.component.css']
})
export class CreateorupdateIndustryComponent {

  @Input() modalTitle: string = '';
  @Input() action: string = '';
  @Input() industry!: Industry;

  constructor(
    public activeModal: NgbActiveModal,
    private industryService: IndustriesService) {}

    
    submitIndustry() {
      if (this.action === 'Crear') {
        this.createIndustry();
      } else if (this.action === 'Actualizar') {
        this.updateIndustry();
      }
    }
        
    updateIndustry() {
      this.industryService.updateIndustry(this.industry.idIndustry, this.industry).subscribe(() => {
        this.activeModal.close('success');
      }, (error) => {
        console.error('Error al actualizar el rubro', error);
      });
    }

    
    createIndustry() {
      this.industryService.createIndustry(this.industry).subscribe(() => {
        this.activeModal.close('success');
      }, (error) => {
        console.error('Error al crear el rubro', error);
      });
    }

    dismissModal() {
      this.activeModal.dismiss('cancel');
    }
}
