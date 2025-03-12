import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewEstPage } from './view-est.page';

describe('ViewEstPage', () => {
  let component: ViewEstPage;
  let fixture: ComponentFixture<ViewEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
