import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorupdateIndustryComponent } from './createorupdate-industry.component';

describe('CreateorupdateIndustryComponent', () => {
  let component: CreateorupdateIndustryComponent;
  let fixture: ComponentFixture<CreateorupdateIndustryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateorupdateIndustryComponent]
    });
    fixture = TestBed.createComponent(CreateorupdateIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
