import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbicacionConfiPage } from './ubicacion-confi.page';

describe('UbicacionConfiPage', () => {
  let component: UbicacionConfiPage;
  let fixture: ComponentFixture<UbicacionConfiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UbicacionConfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
