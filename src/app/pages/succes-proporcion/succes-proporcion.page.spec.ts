import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesProporcionPage } from './succes-proporcion.page';

describe('SuccesProporcionPage', () => {
  let component: SuccesProporcionPage;
  let fixture: ComponentFixture<SuccesProporcionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccesProporcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
