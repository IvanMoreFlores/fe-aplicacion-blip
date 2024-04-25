import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesMarcarDestacadoPage } from './mensajes-marcar-destacado.page';

describe('MensajesMarcarDestacadoPage', () => {
  let component: MensajesMarcarDestacadoPage;
  let fixture: ComponentFixture<MensajesMarcarDestacadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesMarcarDestacadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
