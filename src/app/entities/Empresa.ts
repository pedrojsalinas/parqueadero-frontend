export class Empresa {
  id?: number;
  nombre: string;
  direccion: string;
  latitud: number;
  longitud: number;
  num_espacios: number;
  fraccion: string;
  precio: number;
  descuento: number;

  constructor(empresa?) {
    {
      empresa = empresa || {};
      this.id = empresa.id || '';
      this.nombre = empresa.nombre || '';
      this.direccion = empresa.direccion || '';
      this.latitud = empresa.latitud || '';
      this.longitud = empresa.longitud || '';
      this.num_espacios = empresa.num_espacios || '';
      this.fraccion = empresa.fraccion || '';
      this.precio = empresa.precio || '';
      this.descuento = empresa.descuento || '';
    }
  }
}
