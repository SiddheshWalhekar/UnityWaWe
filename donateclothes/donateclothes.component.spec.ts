import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateclothesComponent } from './donateclothes.component';

describe('DonateclothesComponent', () => {
  let component: DonateclothesComponent;
  let fixture: ComponentFixture<DonateclothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateclothesComponent]
    });
    fixture = TestBed.createComponent(DonateclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
