import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ComponentTestComponent } from './componenttest/componenttest.component';
import { TestbindingComponent } from './testBinding/testbinding.component';
import { ExecicioComponent } from './execicio/execicio.component';

@NgModule({
  declarations: [
    ComponentTestComponent,
    TestbindingComponent,
    ServersComponent,
    ServerComponent,
    WarningAlertComponent,
    AppComponent,
    SuccessAlertComponent,
    ExecicioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
