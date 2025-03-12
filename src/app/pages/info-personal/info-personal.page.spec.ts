import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPersonalPage } from './info-personal.page';

describe('InfoPersonalPage', () => {
  let component: InfoPersonalPage;
  let fixture: ComponentFixture<InfoPersonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
