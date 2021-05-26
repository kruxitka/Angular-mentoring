import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {
  public duration!: number;

  constructor() {}

  ngOnInit(): void {
  }

}
