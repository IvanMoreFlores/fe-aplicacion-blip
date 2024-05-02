import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesArchivadosDesarchivarPage } from './mensajes-archivados-desarchivar.page';

describe('MensajesArchivadosDesarchivarPage', () => {
  let component: MensajesArchivadosDesarchivarPage;
  let fixture: ComponentFixture<MensajesArchivadosDesarchivarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajesArchivadosDesarchivarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
