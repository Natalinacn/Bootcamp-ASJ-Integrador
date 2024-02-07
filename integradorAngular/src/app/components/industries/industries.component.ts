import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateorupdateIndustryComponent } from 'src/app/modals/createorupdate-industry/createorupdate-industry.component';
import { DeleteConfirmationModalComponent } from 'src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { Industry } from 'src/app/model/industryModel';
import { IndustriesService } from 'src/app/services/industries.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit{

  industriesData : Industry[] = [];

  constructor(
    private industryService : IndustriesService,
    private modalService: NgbModal,
    private router: Router
  ){

  }

ngOnInit(): void {
  this.listIndustries();
}

industry: Industry = {
  idIndustry: 0,
  industry: '',
};


listIndustries(){
  this.industryService.getIndustries().subscribe((data)=>{
    this.industriesData = data;
  });

}

deleteIndustry(idIndustry: number) {
  const modalRef = this.modalService.open(DeleteConfirmationModalComponent);
  modalRef.componentInstance.message =
    '¿Está seguro de que desea eliminar este rubro?';
  modalRef.result.then(
    (result) => {
      if (result === 'confirm') {
        this.industryService
          .deleteIndustry(Number(idIndustry))
          .subscribe(() => {
            this.listIndustries();
          });
      }
    },
    (reason) => {
      console.log('Modal de confirmación cerrado sin confirmar: ', reason);
    }
  );
  }

updateIndustry(idIndustry: number) {
  this.industryService.getIndustryById(idIndustry).subscribe(
    (data) => {
      const modalRef = this.modalService.open(CreateorupdateIndustryComponent);
      modalRef.componentInstance.modalTitle = 'Editar Rubro';
      modalRef.componentInstance.action = 'Actualizar';
      modalRef.componentInstance.industry = data;
      modalRef.result.then((result) => {
        if (result === 'success') {
          this.industryService.updateIndustry(idIndustry, modalRef.componentInstance.industry).subscribe(
            () => {
              this.listIndustries();
            },
            (error) => {
              console.error('Error al actualizar el rubro', error);
            }
          );
        }
      });
    },
    (error) => {
      console.error('Error al obtener el rubro', error);
    }
  );
}

getIndustryById(idIndustry: number) {
  this.industryService.getIndustryById(idIndustry).subscribe(
    (data) => {
      this.industry = data;
    },
    (error) => {
      console.error('Error al obtener el rubro', error);
    }
  );
}

openCreateIndustryModal() {
  const modalRef = this.modalService.open(CreateorupdateIndustryComponent); 
  modalRef.componentInstance.modalTitle = 'Crear Rubro'; 
  modalRef.componentInstance.action = 'Crear'; 
  modalRef.componentInstance.industry = this.industry; 
  modalRef.result.then(
    (result) => {
      if (result === 'success') {
        this.listIndustries(); 
      }
    },
    (reason) => {
      console.log('Modal cerrado sin acción: ', reason);
    }
  );
}

}
