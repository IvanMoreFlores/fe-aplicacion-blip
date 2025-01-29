import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienvenidoBlipPage } from './bienvenido-blip.page';

describe('BienvenidoBlipPage', () => {
  let component: BienvenidoBlipPage;
  let fixture: ComponentFixture<BienvenidoBlipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BienvenidoBlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
