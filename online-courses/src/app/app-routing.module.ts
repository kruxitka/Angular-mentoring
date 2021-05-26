import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/courses/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    loadChildren: () =>
      import('./modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/core/modules/login/login.module').then(m => m.LoginModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
