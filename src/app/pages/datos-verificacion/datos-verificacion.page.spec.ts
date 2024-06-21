import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosVerificacionPage } from './datos-verificacion.page';

describe('DatosVerificacionPage', () => {
  let component: DatosVerificacionPage;
  let fixture: ComponentFixture<DatosVerificacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosVerificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
