import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasProporcionarPage } from './reservas-proporcionar.page';

describe('ReservasProporcionarPage', () => {
  let component: ReservasProporcionarPage;
  let fixture: ComponentFixture<ReservasProporcionarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasProporcionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
