import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { PageComponent } from './page/page.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { Coatizacion1Component } from './page/coatizacion1/coatizacion1.component';
import { Coatizacion2Component } from './page/coatizacion2/coatizacion2.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MisCoatizacionesComponent } from './page/mis-coatizaciones/mis-coatizaciones.component';
import { TablaCoatizacionComponent } from './page/tabla-coatizacion/tabla-coatizacion.component';
import { MenuComponent } from './page/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    PageComponent,
    PrincipalComponent,
    Coatizacion1Component,
    Coatizacion2Component,
    MisCoatizacionesComponent,
    TablaCoatizacionComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
