import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorElectrPage } from './cor-electr.page';

describe('CorElectrPage', () => {
  let component: CorElectrPage;
  let fixture: ComponentFixture<CorElectrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorElectrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
