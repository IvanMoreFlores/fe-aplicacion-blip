import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlipHomePage } from './blip-home.page';

describe('BlipHomePage', () => {
  let component: BlipHomePage;
  let fixture: ComponentFixture<BlipHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlipHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
