import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorRegistroPage } from './cor-registro.page';

describe('CorRegistroPage', () => {
  let component: CorRegistroPage;
  let fixture: ComponentFixture<CorRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
