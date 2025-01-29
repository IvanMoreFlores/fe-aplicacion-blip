import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdjDtDniPage } from './adj-dt-dni.page';

describe('AdjDtDniPage', () => {
  let component: AdjDtDniPage;
  let fixture: ComponentFixture<AdjDtDniPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdjDtDniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
