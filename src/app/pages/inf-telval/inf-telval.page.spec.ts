import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfTelvalPage } from './inf-telval.page';

describe('InfTelvalPage', () => {
  let component: InfTelvalPage;
  let fixture: ComponentFixture<InfTelvalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfTelvalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
