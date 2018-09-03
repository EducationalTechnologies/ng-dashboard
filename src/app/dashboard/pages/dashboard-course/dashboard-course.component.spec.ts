import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCourseComponent } from './dashboard-course.component';

describe('DashboardCourseComponent', () => {
  let component: DashboardCourseComponent;
  let fixture: ComponentFixture<DashboardCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
