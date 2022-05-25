import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoraComponent } from './components/hora/hora.component';
import { ListaAlarmasComponent } from './components/lista-alarmas/lista-alarmas.component';
import { TarjetaRelojComponent } from './components/tarjeta-reloj/tarjeta-reloj.component';



@NgModule({
  declarations: [
    HoraComponent,
    ListaAlarmasComponent,
    TarjetaRelojComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoraComponent,
    ListaAlarmasComponent,
    TarjetaRelojComponent
  ]
})
export class RelojModule { }
