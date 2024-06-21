import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosNumeroPage } from './datos-numero.page';

describe('DatosNumeroPage', () => {
  let component: DatosNumeroPage;
  let fixture: ComponentFixture<DatosNumeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosNumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
