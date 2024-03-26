import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionComoMidoMiEspacioPage } from './descripcion-como-mido-mi-espacio.page';

describe('DescripcionComoMidoMiEspacioPage', () => {
  let component: DescripcionComoMidoMiEspacioPage;
  let fixture: ComponentFixture<DescripcionComoMidoMiEspacioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionComoMidoMiEspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
