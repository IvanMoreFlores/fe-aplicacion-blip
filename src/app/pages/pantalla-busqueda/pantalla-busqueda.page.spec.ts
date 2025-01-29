import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PantallaBusquedaPage } from './pantalla-busqueda.page';

describe('PantallaBusquedaPage', () => {
  let component: PantallaBusquedaPage;
  let fixture: ComponentFixture<PantallaBusquedaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PantallaBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
