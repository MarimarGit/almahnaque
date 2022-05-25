import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaComponent } from './components/fecha/fecha.component';
import { ListaCitasComponent } from './components/lista-citas/lista-citas.component';
import { TarjetaCalendarioComponent } from './components/tarjeta-calendario/tarjeta-calendario.component';



@NgModule({
  declarations: [
    FechaComponent,
    ListaCitasComponent,
    TarjetaCalendarioComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FechaComponent,
    ListaCitasComponent,
    TarjetaCalendarioComponent
  ]
})
export class CalendarioModule { }
