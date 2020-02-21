import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/shared/routing/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { MapParkingsComponent } from './components/map-parkings/map-parkings.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { TableComponent } from './components/table/table.component';

// Services
import { EmpresaService } from './shared/controllers/empresa.service';
import { TarjetasService } from './shared/controllers/tarjetas.service';
import { UsuariosService } from './shared/controllers/usuarios.service';
import { Servicios_AdicionalesService } from './shared/controllers/servicios_adicionales.service';
import { PagosService } from './shared/controllers/pagos.service';
import { ReservasService } from './shared/controllers/reservas.service';
import { EspaciosService } from './shared/controllers/espacios.service';
import { EmpresasListComponent } from './components/empresas/empresas-list/empresas-list.component';
import { EmpresaFormComponent } from './components/empresas/empresa-form/empresa-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    MapParkingsComponent,
    EmpresasComponent,
    TableComponent,
    EmpresasListComponent,
    EmpresaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPasswordStrengthModule.forRoot(),
  ],
  providers: [
    EmpresaService,
    EspaciosService,
    ReservasService,
    PagosService,
    Servicios_AdicionalesService,
    UsuariosService,
    TarjetasService
  ],
  entryComponents: [
    EmpresaFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
