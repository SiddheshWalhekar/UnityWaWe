import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStationaryComponent } from './update-stationary.component';

describe('UpdateStationaryComponent', () => {
  let component: UpdateStationaryComponent;
  let fixture: ComponentFixture<UpdateStationaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStationaryComponent]
    });
    fixture = TestBed.createComponent(UpdateStationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
