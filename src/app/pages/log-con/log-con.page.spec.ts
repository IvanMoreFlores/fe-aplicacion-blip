import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogConPage } from './log-con.page';

describe('LogConPage', () => {
  let component: LogConPage;
  let fixture: ComponentFixture<LogConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
