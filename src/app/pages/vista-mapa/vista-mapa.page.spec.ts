import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaMapaPage } from './vista-mapa.page';

describe('VistaMapaPage', () => {
  let component: VistaMapaPage;
  let fixture: ComponentFixture<VistaMapaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
