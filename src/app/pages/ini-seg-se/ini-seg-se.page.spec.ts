import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniSegSePage } from './ini-seg-se.page';

describe('IniSegSePage', () => {
  let component: IniSegSePage;
  let fixture: ComponentFixture<IniSegSePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniSegSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
