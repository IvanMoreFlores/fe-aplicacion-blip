import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfContsucesPage } from './inf-contsuces.page';

describe('InfContsucesPage', () => {
  let component: InfContsucesPage;
  let fixture: ComponentFixture<InfContsucesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfContsucesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
