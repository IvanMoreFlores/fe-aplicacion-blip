import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesReportPage } from './succes-report.page';

describe('SuccesReportPage', () => {
  let component: SuccesReportPage;
  let fixture: ComponentFixture<SuccesReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccesReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
