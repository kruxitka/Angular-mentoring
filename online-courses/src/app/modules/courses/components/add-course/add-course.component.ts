import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSave(): void {}

  public onCancel(): void {}

}
