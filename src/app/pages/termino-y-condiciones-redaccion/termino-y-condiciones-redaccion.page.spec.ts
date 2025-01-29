import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminoYCondicionesRedaccionPage } from './termino-y-condiciones-redaccion.page';

describe('TerminoYCondicionesRedaccionPage', () => {
  let component: TerminoYCondicionesRedaccionPage;
  let fixture: ComponentFixture<TerminoYCondicionesRedaccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerminoYCondicionesRedaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
