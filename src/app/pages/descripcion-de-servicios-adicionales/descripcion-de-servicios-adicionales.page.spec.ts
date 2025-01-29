import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionDeServiciosAdicionalesPage } from './descripcion-de-servicios-adicionales.page';

describe('DescripcionDeServiciosAdicionalesPage', () => {
  let component: DescripcionDeServiciosAdicionalesPage;
  let fixture: ComponentFixture<DescripcionDeServiciosAdicionalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionDeServiciosAdicionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
