import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStep4Component } from './register-step4.component';

describe('RegisterStep4Component', () => {
  let component: RegisterStep4Component;
  let fixture: ComponentFixture<RegisterStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStep4Component ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
