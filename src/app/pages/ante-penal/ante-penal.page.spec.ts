import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntePenalPage } from './ante-penal.page';

describe('AntePenalPage', () => {
  let component: AntePenalPage;
  let fixture: ComponentFixture<AntePenalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntePenalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
