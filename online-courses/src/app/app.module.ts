import { StoreEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { FilterPipe } from './modules/shared/modules/search/pipes/filter.pipe';
import { coursesReducer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot({state: coursesReducer}),
    EffectsModule.forRoot([StoreEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
