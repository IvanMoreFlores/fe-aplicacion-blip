import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Walktrough1Page } from './walktrough1.page';

describe('Walktrough1Page', () => {
  let component: Walktrough1Page;
  let fixture: ComponentFixture<Walktrough1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Walktrough1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
