import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAddFormComponent } from './purchase-add-form.component';

describe('PurchaseAddFormComponent', () => {
  let component: PurchaseAddFormComponent;
  let fixture: ComponentFixture<PurchaseAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseAddFormComponent]
    });
    fixture = TestBed.createComponent(PurchaseAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
