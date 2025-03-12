import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSeguridadPage } from './inicio-seguridad.page';

describe('InicioSeguridadPage', () => {
  let component: InicioSeguridadPage;
  let fixture: ComponentFixture<InicioSeguridadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioSeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
