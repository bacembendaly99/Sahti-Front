import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeP1Component } from './home-p1.component';

describe('HomeP1Component', () => {
  let component: HomeP1Component;
  let fixture: ComponentFixture<HomeP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
