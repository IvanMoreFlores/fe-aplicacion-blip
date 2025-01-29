import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreAnuPage } from './cre-anu.page';

describe('CreAnuPage', () => {
  let component: CreAnuPage;
  let fixture: ComponentFixture<CreAnuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreAnuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
