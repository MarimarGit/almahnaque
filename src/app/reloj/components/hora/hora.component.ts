import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent implements OnInit {
  public hoy: Date;

  constructor() {
    this.hoy = new Date();
  }

  ngOnInit(): void {
    this.hoy = new Date();
    setInterval(() => {
      this.hoy= new Date();
    }, 1000);
  }

}
