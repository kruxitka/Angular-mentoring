import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import * as components from './components';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IfAuthenticatedModule } from './modules/if-auth';

const COMPONENTS = [
  components.LogoComponent,
  components.FooterComponent,
  components.HeaderComponent,
  components.LoginComponent,
  components.LayoutComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, CoreRoutingModule, MatButtonModule, MatIconModule, IfAuthenticatedModule],
  exports: [components.LayoutComponent],
})
export class CoreModule { }
