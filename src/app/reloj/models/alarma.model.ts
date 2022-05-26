import { DiasAlarma } from "./diasAlarma.model";

export class Alarma {
  //Atributos
  public hora       : string;
  public textoAlarma: string;
  public diasActiva : DiasAlarma[];


  //Constructor
  constructor() {
    this.hora        = "";
    this.textoAlarma = "";
    this.diasActiva  = [];
  }
}
