import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentacionInquilinosInformacionPage } from './presentacion-inquilinos-informacion.page';

describe('PresentacionInquilinosInformacionPage', () => {
  let component: PresentacionInquilinosInformacionPage;
  let fixture: ComponentFixture<PresentacionInquilinosInformacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresentacionInquilinosInformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
