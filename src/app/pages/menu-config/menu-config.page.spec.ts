import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MENUCONFIGPage } from './menu-config.page';

describe('MENUCONFIGPage', () => {
  let component: MENUCONFIGPage;
  let fixture: ComponentFixture<MENUCONFIGPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MENUCONFIGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
