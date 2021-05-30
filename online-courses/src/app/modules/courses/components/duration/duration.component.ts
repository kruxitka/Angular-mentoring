import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {
  @Output()
  public courseDuration: EventEmitter<number> = new EventEmitter<number>();
  public duration!: number;

  constructor() {}

  ngOnInit(): void {
  }

  public getDuration(): void {
    this.courseDuration.emit(this.duration);
  }

}
