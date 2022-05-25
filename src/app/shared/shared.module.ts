import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { ListaCitasService } from './services/lista-citas.service';
import { ListaAlarmasService } from './services/lista-alarmas.service';



@NgModule({
  declarations: [
    CabeceraComponent,
    PieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraComponent,
    PieComponent
  ],
  providers: [
    ListaCitasService,
    ListaAlarmasService
  ]
})
export class SharedModule { }
