import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfCorvalPage } from './inf-corval.page';

describe('InfCorvalPage', () => {
  let component: InfCorvalPage;
  let fixture: ComponentFixture<InfCorvalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfCorvalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
