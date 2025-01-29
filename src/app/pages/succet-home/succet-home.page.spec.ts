import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccetHomePage } from './succet-home.page';

describe('SuccetHomePage', () => {
  let component: SuccetHomePage;
  let fixture: ComponentFixture<SuccetHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccetHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
