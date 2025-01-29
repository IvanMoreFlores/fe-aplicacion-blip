import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogBinPage } from './log-bin.page';

describe('LogBinPage', () => {
  let component: LogBinPage;
  let fixture: ComponentFixture<LogBinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogBinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
