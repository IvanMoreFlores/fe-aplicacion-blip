import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosRegistroPage } from './datos-registro.page';

describe('DatosRegistroPage', () => {
  let component: DatosRegistroPage;
  let fixture: ComponentFixture<DatosRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
