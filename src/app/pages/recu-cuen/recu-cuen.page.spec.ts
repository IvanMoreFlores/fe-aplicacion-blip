import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuCuenPage } from './recu-cuen.page';

describe('RecuCuenPage', () => {
  let component: RecuCuenPage;
  let fixture: ComponentFixture<RecuCuenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuCuenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
