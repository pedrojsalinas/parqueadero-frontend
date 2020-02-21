export class Tarjetas {

  constructor(id?: number, estado = null, saldo = null) {
    this.id = id;
    this.estado = estado;
    this.saldo = saldo;
  }

  id?: number;
  estado: number;
  saldo: number;
}
