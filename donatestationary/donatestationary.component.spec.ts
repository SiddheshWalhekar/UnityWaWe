import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatestationaryComponent } from './donatestationary.component';

describe('DonatestationaryComponent', () => {
  let component: DonatestationaryComponent;
  let fixture: ComponentFixture<DonatestationaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonatestationaryComponent]
    });
    fixture = TestBed.createComponent(DonatestationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
