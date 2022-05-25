import { Component, OnInit } from '@angular/core';
import { ListaCitasService } from 'src/app/shared/services/lista-citas.service';
import { Cita } from '../../models/cita.model';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {
  public listaCitas: Cita[];

  constructor(private _listaCitasService: ListaCitasService) {
    this.listaCitas = [];
  }

  ngOnInit(): void {
    this.listaCitas = this._listaCitasService.getListaCitas();
  }

}
