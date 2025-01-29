import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfTelcodPage } from './inf-telcod.page';

describe('InfTelcodPage', () => {
  let component: InfTelcodPage;
  let fixture: ComponentFixture<InfTelcodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfTelcodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
