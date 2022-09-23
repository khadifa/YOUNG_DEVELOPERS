import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadFormComponent } from './road-form.component';

describe('RoadFormComponent', () => {
  let component: RoadFormComponent;
  let fixture: ComponentFixture<RoadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
