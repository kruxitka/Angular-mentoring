import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CoursesComponent, AddCourseComponent } from './components';

const routes: Routes = [
  { path: '', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'new', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: ':id', component:  AddCourseComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
