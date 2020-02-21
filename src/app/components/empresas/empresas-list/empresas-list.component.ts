import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EmpresaService } from 'src/app/shared/controllers/empresa.service';
import { EmpresaFormComponent } from '../empresa-form/empresa-form.component';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styles: []
})
export class EmpresasListComponent implements OnInit, OnDestroy {
  @ViewChild('dialogContent', { static: false })
  dialogContent: TemplateRef<any>;

  empresas: any;
  user: any;
  dataSource: FilesDataSource | null;
  displayedColumns = ['id', 'nombre', 'direccion', 'latitud', 'longitud', 'num_espacios', 'fraccion', 'precio', 'descuento'];
  checkboxes: {};
  dialogRef: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private empresaService: EmpresaService,
    public _matDialog: MatDialog
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataSource = new FilesDataSource(this.empresaService);

    this.empresaService.onEmpresasChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(empresas => {
        this.empresas = empresas;
      });

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  editarEmpresa(empresa): void {
    this.dialogRef = this._matDialog.open(EmpresaFormComponent, {
      panelClass: 'contact-form-dialog',
      data: {
        empresa,
        action: 'edit'
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const actionType: string = response[0];
        const formData: FormGroup = response[1];
        switch (actionType) {
          case 'save':
            // metodo para actualizar
            // this.empresaService.actualizarEmpresa(formData.getRawValue());
            console.log("TCL: EmpresasListComponent -> formData.getRawValue()", formData.getRawValue())
            break;
          case 'delete':
            // metodo para borrar
            console.log('eliminar');
            break;
        }
      });
  }

}

export class FilesDataSource extends DataSource<any>
{
  constructor(
    private empresaService: EmpresaService
  ) {
    super();
  }

  connect(): Observable<any[]> {
    return this.empresaService.onEmpresasChanged;
  }

  disconnect(): void {
  }
}
