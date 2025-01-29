import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CercaDetiPage } from './cerca-deti.page';

describe('CercaDetiPage', () => {
  let component: CercaDetiPage;
  let fixture: ComponentFixture<CercaDetiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CercaDetiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
