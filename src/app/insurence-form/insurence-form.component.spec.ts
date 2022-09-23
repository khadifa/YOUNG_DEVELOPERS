import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurenceFormComponent } from './insurence-form.component';

describe('InsurenceFormComponent', () => {
  let component: InsurenceFormComponent;
  let fixture: ComponentFixture<InsurenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurenceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
