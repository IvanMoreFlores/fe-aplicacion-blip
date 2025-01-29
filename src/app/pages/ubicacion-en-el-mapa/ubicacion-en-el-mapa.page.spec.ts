import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbicacionEnElMapaPage } from './ubicacion-en-el-mapa.page';

describe('UbicacionEnElMapaPage', () => {
  let component: UbicacionEnElMapaPage;
  let fixture: ComponentFixture<UbicacionEnElMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UbicacionEnElMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
