import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionDeIdentidadPage } from './confirmacion-de-identidad.page';

describe('ConfirmacionDeIdentidadPage', () => {
  let component: ConfirmacionDeIdentidadPage;
  let fixture: ComponentFixture<ConfirmacionDeIdentidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmacionDeIdentidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
