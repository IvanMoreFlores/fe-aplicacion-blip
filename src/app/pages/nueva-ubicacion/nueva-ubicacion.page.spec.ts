import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaUbicacionPage } from './nueva-ubicacion.page';

describe('NuevaUbicacionPage', () => {
  let component: NuevaUbicacionPage;
  let fixture: ComponentFixture<NuevaUbicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaUbicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
