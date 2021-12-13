import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeP2Component } from './home-p2.component';

describe('HomeP2Component', () => {
  let component: HomeP2Component;
  let fixture: ComponentFixture<HomeP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
