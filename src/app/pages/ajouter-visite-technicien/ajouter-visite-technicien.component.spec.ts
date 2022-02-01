import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVisiteTechnicienComponent } from './ajouter-visite-technicien.component';

describe('AjouterVisiteTechnicienComponent', () => {
  let component: AjouterVisiteTechnicienComponent;
  let fixture: ComponentFixture<AjouterVisiteTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVisiteTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVisiteTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
