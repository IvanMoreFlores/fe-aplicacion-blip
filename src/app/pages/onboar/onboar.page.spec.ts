import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboarPage } from './onboar.page';

describe('OnboarPage', () => {
  let component: OnboarPage;
  let fixture: ComponentFixture<OnboarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OnboarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
