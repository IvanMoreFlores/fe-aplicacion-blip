import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgMAntePenPage } from './img-m-ante-pen.page';

describe('ImgMAntePenPage', () => {
  let component: ImgMAntePenPage;
  let fixture: ComponentFixture<ImgMAntePenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImgMAntePenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
