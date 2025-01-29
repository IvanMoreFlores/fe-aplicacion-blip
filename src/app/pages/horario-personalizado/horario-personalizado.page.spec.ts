import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioPersonalizadoPage } from './horario-personalizado.page';

describe('HorarioPersonalizadoPage', () => {
  let component: HorarioPersonalizadoPage;
  let fixture: ComponentFixture<HorarioPersonalizadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorarioPersonalizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
