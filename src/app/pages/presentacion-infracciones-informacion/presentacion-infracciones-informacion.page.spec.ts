import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentacionInfraccionesInformacionPage } from './presentacion-infracciones-informacion.page';

describe('PresentacionInfraccionesInformacionPage', () => {
  let component: PresentacionInfraccionesInformacionPage;
  let fixture: ComponentFixture<PresentacionInfraccionesInformacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresentacionInfraccionesInformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
