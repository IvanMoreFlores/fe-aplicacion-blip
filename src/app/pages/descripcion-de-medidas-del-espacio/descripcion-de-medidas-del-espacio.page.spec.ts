import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionDeMedidasDelEspacioPage } from './descripcion-de-medidas-del-espacio.page';

describe('DescripcionDeMedidasDelEspacioPage', () => {
  let component: DescripcionDeMedidasDelEspacioPage;
  let fixture: ComponentFixture<DescripcionDeMedidasDelEspacioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionDeMedidasDelEspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
