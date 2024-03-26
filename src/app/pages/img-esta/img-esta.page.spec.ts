import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgEstaPage } from './img-esta.page';

describe('ImgEstaPage', () => {
  let component: ImgEstaPage;
  let fixture: ComponentFixture<ImgEstaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImgEstaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
