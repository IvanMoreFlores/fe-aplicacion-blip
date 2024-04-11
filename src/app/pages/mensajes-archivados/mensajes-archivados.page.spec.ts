import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesArchivadosPage } from './mensajes-archivados.page';

describe('MensajesArchivadosPage', () => {
  let component: MensajesArchivadosPage;
  let fixture: ComponentFixture<MensajesArchivadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesArchivadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
