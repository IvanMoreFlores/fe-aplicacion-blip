import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderCompPage } from './loader-comp.page';

describe('LoaderCompPage', () => {
  let component: LoaderCompPage;
  let fixture: ComponentFixture<LoaderCompPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
