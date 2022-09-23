import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurenceInformationComponent } from './insurence-information.component';

describe('InsurenceInformationComponent', () => {
  let component: InsurenceInformationComponent;
  let fixture: ComponentFixture<InsurenceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurenceInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurenceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
