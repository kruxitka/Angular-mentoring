import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  public onSearch(searchText: string): void {
    this.search.emit(searchText);
  }

}
