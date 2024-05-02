import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesMarcarLeidoPage } from './mensajes-marcar-leido.page';

describe('MensajesMarcarLeidoPage', () => {
  let component: MensajesMarcarLeidoPage;
  let fixture: ComponentFixture<MensajesMarcarLeidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesMarcarLeidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
