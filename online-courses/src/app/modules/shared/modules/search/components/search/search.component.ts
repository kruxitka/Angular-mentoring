import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onSearch(searchText: string): void {
    console.log(searchText);
  }

}
