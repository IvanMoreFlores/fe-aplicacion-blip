import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreViewEstPage } from './pre-view-est.page';

describe('PreViewEstPage', () => {
  let component: PreViewEstPage;
  let fixture: ComponentFixture<PreViewEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreViewEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
