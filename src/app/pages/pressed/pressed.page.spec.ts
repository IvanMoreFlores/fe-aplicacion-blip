import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PressedPage } from './pressed.page';

describe('PressedPage', () => {
  let component: PressedPage;
  let fixture: ComponentFixture<PressedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PressedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
