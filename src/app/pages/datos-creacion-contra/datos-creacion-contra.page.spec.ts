import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosCreacionContraPage } from './datos-creacion-contra.page';

describe('DatosCreacionContraPage', () => {
  let component: DatosCreacionContraPage;
  let fixture: ComponentFixture<DatosCreacionContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosCreacionContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
