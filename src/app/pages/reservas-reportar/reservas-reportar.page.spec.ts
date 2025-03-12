import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasReportarPage } from './reservas-reportar.page';

describe('ReservasReportarPage', () => {
  let component: ReservasReportarPage;
  let fixture: ComponentFixture<ReservasReportarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasReportarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
