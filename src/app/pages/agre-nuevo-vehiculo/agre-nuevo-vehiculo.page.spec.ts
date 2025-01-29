import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgreNuevoVehiculoPage } from './agre-nuevo-vehiculo.page';

describe('AgreNuevoVehiculoPage', () => {
  let component: AgreNuevoVehiculoPage;
  let fixture: ComponentFixture<AgreNuevoVehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgreNuevoVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
