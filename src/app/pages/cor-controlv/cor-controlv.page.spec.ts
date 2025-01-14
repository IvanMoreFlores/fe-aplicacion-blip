import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorControlvPage } from './cor-controlv.page';

describe('CorControlvPage', () => {
  let component: CorControlvPage;
  let fixture: ComponentFixture<CorControlvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorControlvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
