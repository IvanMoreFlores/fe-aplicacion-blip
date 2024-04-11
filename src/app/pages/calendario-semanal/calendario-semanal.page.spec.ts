import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioSemanalPage } from './calendario-semanal.page';

describe('CalendarioSemanalPage', () => {
  let component: CalendarioSemanalPage;
  let fixture: ComponentFixture<CalendarioSemanalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarioSemanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
