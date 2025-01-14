import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesRestconPage } from './succes-restcon.page';

describe('SuccesRestconPage', () => {
  let component: SuccesRestconPage;
  let fixture: ComponentFixture<SuccesRestconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccesRestconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
