import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerControlComponent } from './farmer-control.component';

describe('FarmerControlComponent', () => {
  let component: FarmerControlComponent;
  let fixture: ComponentFixture<FarmerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
