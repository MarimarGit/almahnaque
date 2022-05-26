import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-calendario',
  templateUrl: './tarjeta-calendario.component.html',
  styleUrls: ['./tarjeta-calendario.component.css']
})
export class TarjetaCalendarioComponent implements OnInit {
  public esFestivo: boolean;  //le paso al hijo fechaComponent este valor

  constructor() {
    this.esFestivo = this.esDiaFestivo();
  }

  ngOnInit(): void {
  }

  esDiaFestivo(): boolean {
    //Devuelve un 0 para domingo, 1 para lunes y así hasta que sea 6 para sábado.
    let hoy = new Date().getDay();
    console.log(hoy);

    if( hoy === 0 || hoy === 6) {
      return true;
    }
    return false;
  }

}
