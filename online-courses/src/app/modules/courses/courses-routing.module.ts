import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent, AddCourseComponent } from './components';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
