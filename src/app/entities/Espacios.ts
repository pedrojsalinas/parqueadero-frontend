export class Espacios {

  constructor(id?: number, estado = null, cubierto = null, empresaId = null) {
    this.id = id;
    this.estado = estado;
    this.cubierto = cubierto;
    this.empresaId = empresaId;
  }

  id?: number;
  estado: number;
  cubierto: number;
  empresaId: number;
}
