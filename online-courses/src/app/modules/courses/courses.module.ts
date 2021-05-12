import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import * as components from './components';
import * as shared from '../shared/modules';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HighlightNewestDirective } from './directives/highlight-newest.directive';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { IfAuthenticatedModule } from '../core/modules/if-auth';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const SHARED = [shared.BreadcrumbsModule, shared.SearchModule, shared.ConfirmationModalModule];

@NgModule({
  declarations: [
    components.CoursesComponent,
    components.CoursesListComponent,
    components.AddCourseComponent,
    components.CourseItemComponent,
    HighlightNewestDirective,
    DurationPipe,
    OrderByPipe,
    components.DateComponent,
    components.DurationComponent,
    components.AuthorsComponent,
    PageNotFoundComponent
  ],
  imports: [
    ...SHARED,
    CommonModule,
    FormsModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    IfAuthenticatedModule
  ]
})
export class CoursesModule { }
