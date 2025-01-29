import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminoYCondicionesPage } from './termino-y-condiciones.page';

describe('TerminoYCondicionesPage', () => {
  let component: TerminoYCondicionesPage;
  let fixture: ComponentFixture<TerminoYCondicionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerminoYCondicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
