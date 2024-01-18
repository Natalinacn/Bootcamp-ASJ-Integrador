import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { ErrorModalComponent } from 'src/app/modals/error-modal/error-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private modalService: NgbModal) {}

  login() {
    console.log('Intento de inicio de sesión');
    if (this.email === 'usuario@gmail.com' && this.password === 'Pass123$') {
      this.router.navigate(['/home']);
    } else {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.message =
        'El mail o contraseña son incorrectos';

      setTimeout(() => {
        modalRef.close('timeout');
        this.router.navigate(['/login']);
      }, 2000);

      this.email = '';
      this.password = '';
    }
  }

}
