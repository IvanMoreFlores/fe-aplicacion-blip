import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminosYCondicionesEmpezarPage } from './terminos-y-condiciones-empezar.page';

describe('TerminosYCondicionesEmpezarPage', () => {
  let component: TerminosYCondicionesEmpezarPage;
  let fixture: ComponentFixture<TerminosYCondicionesEmpezarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerminosYCondicionesEmpezarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
