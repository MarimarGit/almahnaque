//Módulos
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CalendarioModule } from './calendario/calendario.module';
import { RelojModule } from './reloj/reloj.module';
import { SharedModule } from './shared/shared.module';

//Componentes
import { AppComponent } from './app.component';

//Cambiar el local a es-ES
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarioModule,
    RelojModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
