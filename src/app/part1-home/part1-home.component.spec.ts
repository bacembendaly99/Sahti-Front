import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part1HomeComponent } from './part1-home.component';

describe('Part1HomeComponent', () => {
  let component: Part1HomeComponent;
  let fixture: ComponentFixture<Part1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part1HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
