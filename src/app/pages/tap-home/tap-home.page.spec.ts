import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TapHomePage } from './tap-home.page';

describe('TapHomePage', () => {
  let component: TapHomePage;
  let fixture: ComponentFixture<TapHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TapHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
