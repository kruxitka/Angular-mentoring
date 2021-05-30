import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements OnInit {
  @Output()
  public courseDate: EventEmitter<string> = new EventEmitter<string>();
  public date!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public courseDateCreation(): void {
    this.courseDate.emit(this.date);
  }

}
