import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosParkiPage } from './todos-parki.page';

describe('TodosParkiPage', () => {
  let component: TodosParkiPage;
  let fixture: ComponentFixture<TodosParkiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodosParkiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
