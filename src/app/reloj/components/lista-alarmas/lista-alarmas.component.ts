import { Component, OnInit } from '@angular/core';
import { Alarma } from 'src/app/reloj/models/alarma.model';
import { ListaAlarmasService } from 'src/app/shared/services/lista-alarmas.service';

@Component({
  selector: 'app-lista-alarmas',
  templateUrl: './lista-alarmas.component.html',
  styleUrls: ['./lista-alarmas.component.css']
})
export class ListaAlarmasComponent implements OnInit {
  public listaAlarmas: Alarma[];

  constructor(private _listaAlarmasService: ListaAlarmasService) {
    this.listaAlarmas = [];
  }

  ngOnInit(): void {
    this.listaAlarmas = this._listaAlarmasService.getListaAlarmas();
  }

}
