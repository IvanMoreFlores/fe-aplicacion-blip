import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderOlvconPage } from './loader-olvcon.page';

describe('LoaderOlvconPage', () => {
  let component: LoaderOlvconPage;
  let fixture: ComponentFixture<LoaderOlvconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoaderOlvconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
