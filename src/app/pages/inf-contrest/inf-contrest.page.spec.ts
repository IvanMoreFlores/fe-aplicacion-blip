import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfContrestPage } from './inf-contrest.page';

describe('InfContrestPage', () => {
  let component: InfContrestPage;
  let fixture: ComponentFixture<InfContrestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfContrestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
