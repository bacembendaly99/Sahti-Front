import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2HomeComponent } from './part2-home.component';

describe('Part2HomeComponent', () => {
  let component: Part2HomeComponent;
  let fixture: ComponentFixture<Part2HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part2HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
