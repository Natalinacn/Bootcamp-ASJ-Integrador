import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAddFormComponent } from './provider-add-form.component';

describe('ProviderAddFormComponent', () => {
  let component: ProviderAddFormComponent;
  let fixture: ComponentFixture<ProviderAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderAddFormComponent]
    });
    fixture = TestBed.createComponent(ProviderAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
