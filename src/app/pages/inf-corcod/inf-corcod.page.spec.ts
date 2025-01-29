import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfCorcodPage } from './inf-corcod.page';

describe('InfCorcodPage', () => {
  let component: InfCorcodPage;
  let fixture: ComponentFixture<InfCorcodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfCorcodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
