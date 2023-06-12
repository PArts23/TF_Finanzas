import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/model/Pago';
import { PlanService } from 'src/app/service/plan.service';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-coatizacion2',
  templateUrl: './coatizacion2.component.html',
  styleUrls: ['./coatizacion2.component.css']
})

export class Coatizacion2Component {

  monto: number = 0;
  periodo: number = 0;
  tasa: number = 0;
  pagos: Pago[] = [];
  cuota: number = 0;

  constructor(private planService: PlanService, private datosService: DatosService, private router: Router) { }

  Crear_coatizacion() {
    this.pagos = this.planService.Calcular_cuotizacion(this.tasa, this.monto, this.periodo);
    this.datosService.setPagos(this.pagos);
    this.router.navigateByUrl('/Mi-Vivienda/nueva-cotizacion/cronograma');

    //this.cuota = this.planService.Calcular_cuota(this.tasa, this.monto, this.periodo);
  }
}




/*{

  formulario: FormGroup;

  monto: number = 0;
  periodo: number = 0;
  tasa: number = 0;

  ngOnInit() {
    this.formulario = new FormGroup({
      nombreVariable: new FormControl()
    });

  }*/