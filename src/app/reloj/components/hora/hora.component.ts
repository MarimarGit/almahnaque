import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent implements OnInit {
  public hora: string;

  constructor() {
    this.hora = new Date().toTimeString();   }

  ngOnInit(): void {
  }

}
