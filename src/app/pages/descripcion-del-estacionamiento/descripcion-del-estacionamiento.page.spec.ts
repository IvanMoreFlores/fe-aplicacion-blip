import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionDelEstacionamientoPage } from './descripcion-del-estacionamiento.page';

describe('DescripcionDelEstacionamientoPage', () => {
  let component: DescripcionDelEstacionamientoPage;
  let fixture: ComponentFixture<DescripcionDelEstacionamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionDelEstacionamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
