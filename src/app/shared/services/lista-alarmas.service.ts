import { Injectable } from '@angular/core';
import { Alarma } from 'src/app/reloj/models/alarma.model';

@Injectable({
  providedIn: 'root'
})
export class ListaAlarmasService {

  constructor() { }

  public getListaAlarmas(): Alarma[] {
    let listaAlarmas: Alarma[] = [
      {
        hora: "09:00",
        textoAlarma: "Desayuno",
        lunes: true,
        martes: false,
        miercoles: true,
        jueves: true,
        viernes: false,
        sabado: true,
        domingo: true
      },
      {
        hora: "11:00",
        textoAlarma: "Media mañana",
        lunes: false,
        martes: true,
        miercoles: true,
        jueves: false,
        viernes: true,
        sabado: false,
        domingo: false
      },
      {
        hora: "14:00",
        textoAlarma: "Comida",
        lunes: false,
        martes: true,
        miercoles: true,
        jueves: false,
        viernes: true,
        sabado: true,
        domingo: true
      },
      {
        hora: "16:00",
        textoAlarma: "Café",
        lunes: true,
        martes: false,
        miercoles: true,
        jueves: true,
        viernes: true,
        sabado: true,
        domingo: false
      },
      {
        hora: "18:00",
        textoAlarma: "Merienda",
        lunes: true,
        martes: false,
        miercoles: true,
        jueves: true,
        viernes: true,
        sabado: true,
        domingo: false
      },
      {
        hora: "20:00",
        textoAlarma: "Cena",
        lunes: true,
        martes: true,
        miercoles: true,
        jueves: true,
        viernes: true,
        sabado: true,
        domingo: true
      }
    ];
    return listaAlarmas;
  }
}
