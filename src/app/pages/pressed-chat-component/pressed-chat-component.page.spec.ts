import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PressedChatComponentPage } from './pressed-chat-component.page';

describe('PressedChatComponentPage', () => {
  let component: PressedChatComponentPage;
  let fixture: ComponentFixture<PressedChatComponentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PressedChatComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
