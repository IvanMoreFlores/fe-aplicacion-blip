import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidacionIdnPage } from './validacion-idn.page';

describe('ValidacionIdnPage', () => {
  let component: ValidacionIdnPage;
  let fixture: ComponentFixture<ValidacionIdnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidacionIdnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
