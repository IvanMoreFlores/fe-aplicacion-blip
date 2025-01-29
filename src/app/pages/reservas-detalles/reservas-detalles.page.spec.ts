import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasDetallesPage } from './reservas-detalles.page';

describe('ReservasDetallesPage', () => {
  let component: ReservasDetallesPage;
  let fixture: ComponentFixture<ReservasDetallesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
