import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContraVerfPage } from './contra-verf.page';

describe('ContraVerfPage', () => {
  let component: ContraVerfPage;
  let fixture: ComponentFixture<ContraVerfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContraVerfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
