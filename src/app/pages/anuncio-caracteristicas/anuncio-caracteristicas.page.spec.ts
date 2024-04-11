import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnuncioCaracteristicasPage } from './anuncio-caracteristicas.page';

describe('AnuncioCaracteristicasPage', () => {
  let component: AnuncioCaracteristicasPage;
  let fixture: ComponentFixture<AnuncioCaracteristicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnuncioCaracteristicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
