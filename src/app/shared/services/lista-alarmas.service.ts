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
        diasActiva: [
          {
            diaSemana: "L",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "M",
            establecida: true,
            tono: "",
            aplazar: false
          }
        ]
      },
      {
        hora: "11:00",
        textoAlarma: "Media mañana",
        diasActiva: [
          {
            diaSemana: "M",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "S",
            establecida: true,
            tono: "",
            aplazar: false
          }
        ]
      },
      {
        hora: "14:00",
        textoAlarma: "Comida",
        diasActiva: [
          {
            diaSemana: "L",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "M",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "X",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "J",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "V",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "S",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "D",
            establecida: true,
            tono: "",
            aplazar: false
          }
        ]
      },
      {
        hora: "16:30",
        textoAlarma: "Café",
        diasActiva: [
          {
            diaSemana: "L",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "M",
            establecida: true,
            tono: "",
            aplazar: false
          }
        ]
      },
      {
        hora: "18:00",
        textoAlarma: "Merienda",
        diasActiva: [
          {
            diaSemana: "L",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "M",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "J",
            establecida: true,
            tono: "",
            aplazar: false
          }
        ]
      },
      {
        hora: "20:00",
        textoAlarma: "Cena",
        diasActiva: [
          {
            diaSemana: "L",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "S",
            establecida: true,
            tono: "",
            aplazar: false
          },
          {
            diaSemana: "D",
            establecida: true,
            tono: "",
            aplazar: false
          }
        ]
      }
    ];
    return listaAlarmas;
  }
}
