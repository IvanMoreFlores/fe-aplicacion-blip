import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoAnuPoneAlqPage } from './nuevo-anu-pone-alq.page';

describe('NuevoAnuPoneAlqPage', () => {
  let component: NuevoAnuPoneAlqPage;
  let fixture: ComponentFixture<NuevoAnuPoneAlqPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoAnuPoneAlqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
