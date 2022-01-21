import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVisiteComponent } from './ajouter-visite.component';

describe('AjouterVisiteComponent', () => {
  let component: AjouterVisiteComponent;
  let fixture: ComponentFixture<AjouterVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
