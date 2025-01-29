import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfCorsuccesPage } from './inf-corsucces.page';

describe('InfCorsuccesPage', () => {
  let component: InfCorsuccesPage;
  let fixture: ComponentFixture<InfCorsuccesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfCorsuccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
