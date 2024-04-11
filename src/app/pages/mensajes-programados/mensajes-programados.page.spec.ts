import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesProgramadosPage } from './mensajes-programados.page';

describe('MensajesProgramadosPage', () => {
  let component: MensajesProgramadosPage;
  let fixture: ComponentFixture<MensajesProgramadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesProgramadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
