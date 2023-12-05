import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClothesComponent } from './update-clothes.component';

describe('UpdateClothesComponent', () => {
  let component: UpdateClothesComponent;
  let fixture: ComponentFixture<UpdateClothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateClothesComponent]
    });
    fixture = TestBed.createComponent(UpdateClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
