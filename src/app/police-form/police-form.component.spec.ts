import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceFormComponent } from './police-form.component';

describe('PoliceFormComponent', () => {
  let component: PoliceFormComponent;
  let fixture: ComponentFixture<PoliceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
