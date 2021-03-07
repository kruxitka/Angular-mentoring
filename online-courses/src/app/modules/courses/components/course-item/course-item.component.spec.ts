import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../interfaces/course.interface';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('course id is emitted when click Delete button', () => {
    const comp = new CourseItemComponent();
    const course = {
      id: '1',
      title: 'Course title 1',
    };
    comp.course = course;

    comp.deleteCourse.subscribe((itemToDelete) => expect(itemToDelete).toBe(course.id));
    comp.delete();
  });
});
