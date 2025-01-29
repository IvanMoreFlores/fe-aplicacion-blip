import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CronometroPage } from './cronometro.page';

describe('CronometroPage', () => {
  let component: CronometroPage;
  let fixture: ComponentFixture<CronometroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CronometroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
