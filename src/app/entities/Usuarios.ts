export class Usuarios {

  constructor(id?: number, ip = '', tarjetaId = null) {
    this.id = id;
    this.ip = ip;
    this.tarjetaId = tarjetaId;
  }

  id?: number;
  ip: string;
  tarjetaId: number;
}
