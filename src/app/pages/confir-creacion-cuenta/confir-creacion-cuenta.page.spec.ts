import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirCreacionCuentaPage } from './confir-creacion-cuenta.page';

describe('ConfirCreacionCuentaPage', () => {
  let component: ConfirCreacionCuentaPage;
  let fixture: ComponentFixture<ConfirCreacionCuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirCreacionCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
