import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesCorrPage } from './succes-corr.page';

describe('SuccesCorrPage', () => {
  let component: SuccesCorrPage;
  let fixture: ComponentFixture<SuccesCorrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccesCorrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
