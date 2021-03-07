import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onDeleteCourse function is called', () => {
    const deleteCourse = spyOn(component, 'onDeleteCourse');

    fixture.debugElement.query(By.css('app-course-item')).triggerEventHandler('deleteCourse', null);
    fixture.detectChanges();
    expect(deleteCourse).toHaveBeenCalled();
  });
});
