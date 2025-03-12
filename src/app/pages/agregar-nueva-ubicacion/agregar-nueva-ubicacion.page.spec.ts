import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarNuevaUbicacionPage } from './agregar-nueva-ubicacion.page';

describe('AgregarNuevaUbicacionPage', () => {
  let component: AgregarNuevaUbicacionPage;
  let fixture: ComponentFixture<AgregarNuevaUbicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarNuevaUbicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
