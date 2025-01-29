import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeParkPage } from './time-park.page';

describe('TimeParkPage', () => {
  let component: TimeParkPage;
  let fixture: ComponentFixture<TimeParkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TimeParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
