export class Alarma {
  //Atributos
  public hora       : string;
  public textoAlarma: string;
  public lunes      : boolean;
  public martes     : boolean;
  public miercoles  : boolean;
  public jueves     : boolean;
  public viernes    : boolean;
  public sabado     : boolean;
  public domingo    : boolean;


  //Constructor
  constructor() {
    this.hora        = "";
    this.textoAlarma = "";
    this.lunes       = false;
    this.martes      = false;
    this.miercoles   = false;
    this.jueves      = false;
    this.viernes     = false;
    this.sabado      = false;
    this.domingo     = false;
  }
}
