import { PrincipalComponent } from './page/principal/principal.component';
import { Coatizacion1Component } from './page/coatizacion1/coatizacion1.component';
import { Coatizacion2Component } from './page/coatizacion2/coatizacion2.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaCoatizacionComponent } from './page/tabla-coatizacion/tabla-coatizacion.component';
import { MenuComponent } from './page/menu/menu.component';

const routes: Routes = [

  { path: '', redirectTo: '/Mi-Vivienda/Inicio', pathMatch: 'full' },
  {
    path: 'Mi-Vivienda', component: MenuComponent, children: [

      { path: 'inicio', component: PrincipalComponent },
      {
        path: 'nueva-cotizacion', component: Coatizacion1Component, children: [
          { path: 'configurar', component: Coatizacion2Component },
          { path: 'cronograma', component: TablaCoatizacionComponent }
        ]
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
  { path: 'inicio', component: PrincipalComponent },
{
  path: 'nueva-cotizacion', component: Coatizacion1Component, children: [
    { path: 'configurar', component: Coatizacion2Component },
    { path: 'tabla-cotizacion', component: TablaCoatizacionComponent }
  ]
}*/
