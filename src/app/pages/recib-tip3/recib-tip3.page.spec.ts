import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecibTip3Page } from './recib-tip3.page';

describe('RecibTip3Page', () => {
  let component: RecibTip3Page;
  let fixture: ComponentFixture<RecibTip3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecibTip3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
