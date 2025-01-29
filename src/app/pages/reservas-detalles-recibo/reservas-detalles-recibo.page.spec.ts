import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasDetallesReciboPage } from './reservas-detalles-recibo.page';

describe('ReservasDetallesReciboPage', () => {
  let component: ReservasDetallesReciboPage;
  let fixture: ComponentFixture<ReservasDetallesReciboPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasDetallesReciboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
