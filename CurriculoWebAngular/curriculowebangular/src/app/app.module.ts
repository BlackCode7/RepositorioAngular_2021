import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CurriculoWebAngularComponent } from './curriculowebangular.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   // CurriculoWebAngularComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
