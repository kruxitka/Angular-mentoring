import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();
  public searchText!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onSearch(searchText: string): void {
    console.log(searchText);
    this.search.emit(searchText);
  }

}
