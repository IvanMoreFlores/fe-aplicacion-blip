import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasLoadingPage } from './reservas-loading.page';

describe('ReservasLoadingPage', () => {
  let component: ReservasLoadingPage;
  let fixture: ComponentFixture<ReservasLoadingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
