import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesDestacadosPage } from './mensajes-destacados.page';

describe('MensajesDestacadosPage', () => {
  let component: MensajesDestacadosPage;
  let fixture: ComponentFixture<MensajesDestacadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesDestacadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
