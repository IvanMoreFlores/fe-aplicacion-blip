import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruPage } from './pru.page';

describe('PruPage', () => {
  let component: PruPage;
  let fixture: ComponentFixture<PruPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
