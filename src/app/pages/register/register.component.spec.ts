import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: NgxRegisterComponent;
  let fixture: ComponentFixture<NgxRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRegisterComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
