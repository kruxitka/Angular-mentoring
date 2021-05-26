import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
