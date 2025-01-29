import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesCorPage } from './succes-cor.page';

describe('SuccesCorPage', () => {
  let component: SuccesCorPage;
  let fixture: ComponentFixture<SuccesCorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccesCorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
