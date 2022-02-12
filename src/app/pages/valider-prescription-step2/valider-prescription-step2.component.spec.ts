import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderPrescriptionStep2Component } from './valider-prescription-step2.component';

describe('ValiderPrescriptionStep2Component', () => {
  let component: ValiderPrescriptionStep2Component;
  let fixture: ComponentFixture<ValiderPrescriptionStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderPrescriptionStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderPrescriptionStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
