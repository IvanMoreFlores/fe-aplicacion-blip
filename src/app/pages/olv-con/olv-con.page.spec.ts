import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvConPage } from './olv-con.page';

describe('OlvConPage', () => {
  let component: OlvConPage;
  let fixture: ComponentFixture<OlvConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
