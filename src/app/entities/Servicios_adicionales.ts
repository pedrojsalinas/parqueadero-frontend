export class Servicios_adicionales {

  constructor(id?: number, nombre = '', cantidad = null,
    precio = null, empresaId = null) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.empresaId = empresaId;
  }

  id?: number;
  nombre: string;
  cantidad: number;
  precio: number;
  descuento: number;
  empresaId: number;
}
