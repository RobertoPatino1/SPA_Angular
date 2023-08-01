import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponentComponent } from './chart-component.component';

describe('ChartComponentComponent', () => {
  let component: ChartComponentComponent;
  let fixture: ComponentFixture<ChartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartComponentComponent]
    });
    fixture = TestBed.createComponent(ChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
