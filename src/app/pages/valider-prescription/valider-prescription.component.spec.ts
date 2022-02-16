import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderPrescriptionComponent } from './valider-prescription.component';

describe('ValiderPrescriptionComponent', () => {
  let component: ValiderPrescriptionComponent;
  let fixture: ComponentFixture<ValiderPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
