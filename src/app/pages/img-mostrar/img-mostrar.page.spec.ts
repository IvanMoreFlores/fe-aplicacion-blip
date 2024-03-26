import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgMostrarPage } from './img-mostrar.page';

describe('ImgMostrarPage', () => {
  let component: ImgMostrarPage;
  let fixture: ComponentFixture<ImgMostrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImgMostrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
