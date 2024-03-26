import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionDeUbicacionPage } from './descripcion-de-ubicacion.page';

describe('DescripcionDeUbicacionPage', () => {
  let component: DescripcionDeUbicacionPage;
  let fixture: ComponentFixture<DescripcionDeUbicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionDeUbicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
