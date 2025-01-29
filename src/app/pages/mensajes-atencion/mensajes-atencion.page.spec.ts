import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesAtencionPage } from './mensajes-atencion.page';

describe('MensajesAtencionPage', () => {
  let component: MensajesAtencionPage;
  let fixture: ComponentFixture<MensajesAtencionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesAtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
