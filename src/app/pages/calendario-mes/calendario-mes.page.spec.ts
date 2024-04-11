import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioMesPage } from './calendario-mes.page';

describe('CalendarioMesPage', () => {
  let component: CalendarioMesPage;
  let fixture: ComponentFixture<CalendarioMesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarioMesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
