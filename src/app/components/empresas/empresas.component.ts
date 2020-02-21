import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { EmpresaService } from 'src/app/shared/controllers/empresa.service';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styles: []
})
export class EmpresasComponent implements OnInit, OnDestroy {


  // Private
  private _unsubscribeAll: Subject<any>;
  dialogRef: any;


  constructor(
    private empresaService: EmpresaService,
    private _matDialog: MatDialog
  ) {

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  nuevaEmpresa(): void {
    this.dialogRef = this._matDialog.open(EmpresaFormComponent, {
      panelClass: 'contact-form-dialog',
      data: {
        action: 'new'
      }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        // metodo para agregar
        // this.empresaService.agregarEmpresa(response.getRawValue());
        console.log("TCL: EmpresasComponent -> response.getRawValue()", response.getRawValue())
      });
  }

}
