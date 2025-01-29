import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliPrefPage } from './eli-pref.page';

describe('EliPrefPage', () => {
  let component: EliPrefPage;
  let fixture: ComponentFixture<EliPrefPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliPrefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
