import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerControlComponent } from './dealer-control.component';

describe('DealerControlComponent', () => {
  let component: DealerControlComponent;
  let fixture: ComponentFixture<DealerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
