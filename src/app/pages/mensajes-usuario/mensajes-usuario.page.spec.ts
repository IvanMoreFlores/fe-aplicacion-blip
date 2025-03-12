import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesUsuarioPage } from './mensajes-usuario.page';

describe('MensajesUsuarioPage', () => {
  let component: MensajesUsuarioPage;
  let fixture: ComponentFixture<MensajesUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
