import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionDelEspacioPage } from './descripcion-del-espacio.page';

describe('DescripcionDelEspacioPage', () => {
  let component: DescripcionDelEspacioPage;
  let fixture: ComponentFixture<DescripcionDelEspacioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionDelEspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
