import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components';

const COMPONENTS = [components.LogoComponent, components.FooterComponent, components.HeaderComponent, components.LoginComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class CoreModule { }
