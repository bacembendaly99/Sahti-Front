import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierMedicalComponent } from './dossier-medical.component';

describe('DossierMedicalComponent', () => {
  let component: DossierMedicalComponent;
  let fixture: ComponentFixture<DossierMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
