import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkeSitGurdPage } from './parke-sit-gurd.page';

describe('ParkeSitGurdPage', () => {
  let component: ParkeSitGurdPage;
  let fixture: ComponentFixture<ParkeSitGurdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParkeSitGurdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
