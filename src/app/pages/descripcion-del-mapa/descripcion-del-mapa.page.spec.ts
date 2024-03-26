import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionDelMapaPage } from './descripcion-del-mapa.page';

describe('DescripcionDelMapaPage', () => {
  let component: DescripcionDelMapaPage;
  let fixture: ComponentFixture<DescripcionDelMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionDelMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
