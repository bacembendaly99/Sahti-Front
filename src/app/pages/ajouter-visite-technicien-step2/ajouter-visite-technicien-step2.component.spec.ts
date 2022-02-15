import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVisiteTechnicienStep2Component } from './ajouter-visite-technicien-step2.component';

describe('AjouterVisiteTechnicienStep2Component', () => {
  let component: AjouterVisiteTechnicienStep2Component;
  let fixture: ComponentFixture<AjouterVisiteTechnicienStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVisiteTechnicienStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVisiteTechnicienStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
