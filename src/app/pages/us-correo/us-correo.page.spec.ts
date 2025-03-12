import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsCorreoPage } from './us-correo.page';

describe('UsCorreoPage', () => {
  let component: UsCorreoPage;
  let fixture: ComponentFixture<UsCorreoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
