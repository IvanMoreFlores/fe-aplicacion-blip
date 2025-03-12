import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreacContraPage } from './creac-contra.page';

describe('CreacContraPage', () => {
  let component: CreacContraPage;
  let fixture: ComponentFixture<CreacContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreacContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
