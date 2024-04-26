import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelAnfitrionPage } from './panel-anfitrion.page';

describe('PanelAnfitrionPage', () => {
  let component: PanelAnfitrionPage;
  let fixture: ComponentFixture<PanelAnfitrionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PanelAnfitrionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
