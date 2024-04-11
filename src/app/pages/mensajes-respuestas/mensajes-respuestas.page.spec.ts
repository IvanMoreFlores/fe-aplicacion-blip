import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesRespuestasPage } from './mensajes-respuestas.page';

describe('MensajesRespuestasPage', () => {
  let component: MensajesRespuestasPage;
  let fixture: ComponentFixture<MensajesRespuestasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesRespuestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
