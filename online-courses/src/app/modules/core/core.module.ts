import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import * as components from './components';

const COMPONENTS = [
  components.LogoComponent,
  components.FooterComponent,
  components.HeaderComponent,
  components.LoginComponent,
  components.LayoutComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, CoreRoutingModule],
  exports: [components.LayoutComponent],
})
export class CoreModule { }
