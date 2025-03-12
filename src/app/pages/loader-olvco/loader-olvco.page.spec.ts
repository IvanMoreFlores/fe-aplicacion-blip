import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderOlvcoPage } from './loader-olvco.page';

describe('LoaderOlvcoPage', () => {
  let component: LoaderOlvcoPage;
  let fixture: ComponentFixture<LoaderOlvcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderOlvcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
