import { Injectable } from '@angular/core';
import { Cita } from 'src/app/calendario/models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class ListaCitasService {

  constructor() { }

  public getListaCitas(): Cita[] {
     //Rellenamos el array de citas
     let listaCitas = [
      {
        fecha: "2022-06-01",
        hora: "22:00",
        textoCita: "Dia mundial de la música",
        lugarCita: "Auditorio Maestro Padilla"
      },
      {
        fecha: "2022-06-02",
        hora: "10:30",
        textoCita: "Dia mundial del café",
        lugarCita: "Craft Coffee"
      },
      {
        fecha: "2022-06-03",
        hora: "10:00",
        textoCita: "Dia mundial del libro",
        lugarCita: "Biblioteca de la UAL"
      },
      {
        fecha: "2022-06-04",
        hora: "11:30",
        textoCita: "Dia mundial de la pintura",
        lugarCita: "Musero de la pintura de Almería"
      }
    ];

    return listaCitas;
  }
}
