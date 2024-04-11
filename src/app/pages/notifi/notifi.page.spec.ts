import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotifiPage } from './notifi.page';

describe('NotifiPage', () => {
  let component: NotifiPage;
  let fixture: ComponentFixture<NotifiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
