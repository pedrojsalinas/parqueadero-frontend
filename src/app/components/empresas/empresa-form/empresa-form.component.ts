import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Empresa } from 'src/app/entities/Empresa';


@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styles: []
})
export class EmpresaFormComponent {
  action: string;
  empresa: Empresa;
  empresaForm: FormGroup;
  dialogTitle: string;


  constructor(
    public matDialogRef: MatDialogRef<EmpresaFormComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _formBuilder: FormBuilder
  ) {
    // Set the defaults
    this.action = _data.action;

    if (this.action === 'edit') {
      this.dialogTitle = 'Edit empresa';
      this.empresa = _data.empresa;
      console.log("TCL: EmpresaFormComponent -> _data.empresa", _data.empresa)
    }
    else {
      this.dialogTitle = 'New empresa';
      this.empresa = new Empresa({});
    }

    this.empresaForm = this.createempresaForm();
  }

  createempresaForm(): FormGroup {
    return this._formBuilder.group({
      id: [this.empresa.id],
      nombre: [this.empresa.nombre],
      direccion: [this.empresa.direccion],
      latitud: [this.empresa.latitud],
      longitud: [this.empresa.longitud],
      num_espacios: [this.empresa.num_espacios],
      fraccion: [this.empresa.fraccion],
      precio: [this.empresa.precio],
      descuento: [this.empresa.descuento]
    });
  }
}
