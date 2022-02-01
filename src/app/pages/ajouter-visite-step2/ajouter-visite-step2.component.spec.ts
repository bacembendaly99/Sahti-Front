import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVisiteStep2Component } from './ajouter-visite-step2.component';

describe('AjouterVisiteStep2Component', () => {
  let component: AjouterVisiteStep2Component;
  let fixture: ComponentFixture<AjouterVisiteStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVisiteStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVisiteStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
