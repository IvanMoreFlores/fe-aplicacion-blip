import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfContcodPage } from './inf-contcod.page';

describe('InfContcodPage', () => {
  let component: InfContcodPage;
  let fixture: ComponentFixture<InfContcodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfContcodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
