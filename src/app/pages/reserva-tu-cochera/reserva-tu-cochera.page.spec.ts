import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaTuCocheraPage } from './reserva-tu-cochera.page';

describe('ReservaTuCocheraPage', () => {
  let component: ReservaTuCocheraPage;
  let fixture: ComponentFixture<ReservaTuCocheraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservaTuCocheraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
