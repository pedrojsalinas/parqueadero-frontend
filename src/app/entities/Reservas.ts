export class Reservas {

  constructor(id?: number, horaInicio = '', horaSalida = '',
    empresaId = null, tarjetaId = null) {
    this.id = id;
    this.horaInicio = horaInicio;
    this.horaSalida = horaSalida;
    this.empresaId = empresaId;
    this.tarjetaId = tarjetaId;
  }

  id?: number;
  horaInicio: string;
  horaSalida: string;
  empresaId: number;
  tarjetaId: number;
}
