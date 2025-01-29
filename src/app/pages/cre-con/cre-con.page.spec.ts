import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreConPage } from './cre-con.page';

describe('CreConPage', () => {
  let component: CreConPage;
  let fixture: ComponentFixture<CreConPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
