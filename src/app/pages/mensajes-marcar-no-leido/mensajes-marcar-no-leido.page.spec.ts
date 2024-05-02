import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesMarcarNoLeidoPage } from './mensajes-marcar-no-leido.page';

describe('MensajesMarcarNoLeidoPage', () => {
  let component: MensajesMarcarNoLeidoPage;
  let fixture: ComponentFixture<MensajesMarcarNoLeidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesMarcarNoLeidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
