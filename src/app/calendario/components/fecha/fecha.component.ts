import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  public fecha: Date;
  @Input() public esFestivo: boolean; //le pasaré este dato desde el padre

  constructor() {
    this.fecha = new Date();
    this.esFestivo = false;
   }

  ngOnInit(): void {
  }

}
