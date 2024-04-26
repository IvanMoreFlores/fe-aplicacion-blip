import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PressedChatPage } from './pressed-chat.page';

describe('PressedChatPage', () => {
  let component: PressedChatPage;
  let fixture: ComponentFixture<PressedChatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PressedChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
