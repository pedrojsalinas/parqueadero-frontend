export class Pagos {

  constructor(id = 0, valor = 0, empresaId = 0, tarjetaId = 0) {
    this.id = id;
    this.valor = valor;
    this.empresaId = empresaId;
    this.tarjetaId = tarjetaId;
  }

  id: number;
  valor: number;
  empresaId: number;
  tarjetaId: number;
}
