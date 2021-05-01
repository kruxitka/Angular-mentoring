import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [SearchComponent, FilterPipe],
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule],
  exports: [SearchComponent]
})
export class SearchModule { }
