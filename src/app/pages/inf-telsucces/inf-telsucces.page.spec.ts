import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfTelsuccesPage } from './inf-telsucces.page';

describe('InfTelsuccesPage', () => {
  let component: InfTelsuccesPage;
  let fixture: ComponentFixture<InfTelsuccesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfTelsuccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
