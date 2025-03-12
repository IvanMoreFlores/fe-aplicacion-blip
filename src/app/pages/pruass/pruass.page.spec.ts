import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruassPage } from './pruass.page';

describe('PruassPage', () => {
  let component: PruassPage;
  let fixture: ComponentFixture<PruassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
