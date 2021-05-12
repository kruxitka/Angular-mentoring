import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationModalModule } from 'src/app/modules/shared/modules/confirmation-modal';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    ConfirmationModalModule
  ]
})
export class LoginModule { }
