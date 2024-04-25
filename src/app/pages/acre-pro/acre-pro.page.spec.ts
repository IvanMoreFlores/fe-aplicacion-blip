import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcreProPage } from './acre-pro.page';

describe('AcreProPage', () => {
  let component: AcreProPage;
  let fixture: ComponentFixture<AcreProPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcreProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
