import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdsPage } from './lds.page';

describe('LdsPage', () => {
  let component: LdsPage;
  let fixture: ComponentFixture<LdsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
