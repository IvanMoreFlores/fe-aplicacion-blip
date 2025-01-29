import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelacionPoliticaPage } from './cancelacion-politica.page';

describe('CancelacionPoliticaPage', () => {
  let component: CancelacionPoliticaPage;
  let fixture: ComponentFixture<CancelacionPoliticaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CancelacionPoliticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
