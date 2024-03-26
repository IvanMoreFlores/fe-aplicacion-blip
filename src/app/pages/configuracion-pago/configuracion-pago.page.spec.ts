import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionPagoPage } from './configuracion-pago.page';

describe('ConfiguracionPagoPage', () => {
  let component: ConfiguracionPagoPage;
  let fixture: ComponentFixture<ConfiguracionPagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiguracionPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
