import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosIngresarPage } from './datos-ingresar.page';

describe('DatosIngresarPage', () => {
  let component: DatosIngresarPage;
  let fixture: ComponentFixture<DatosIngresarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosIngresarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
