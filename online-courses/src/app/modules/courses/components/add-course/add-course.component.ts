import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public courseId!: string;
  public isAddMode!: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params.id;
    this.isAddMode = !this.courseId;
  }

  public onSave(): void {
    this.router.navigate(['/']);
  }

  public onCancel(): void {}

}
