import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDocteurComponent } from './historique-docteur.component';

describe('HistoriqueDocteurComponent', () => {
  let component: HistoriqueDocteurComponent;
  let fixture: ComponentFixture<HistoriqueDocteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueDocteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
