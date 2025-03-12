import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecibTip2Page } from './recib-tip2.page';

describe('RecibTip2Page', () => {
  let component: RecibTip2Page;
  let fixture: ComponentFixture<RecibTip2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecibTip2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
