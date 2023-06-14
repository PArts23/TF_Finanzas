import { DatosService } from './../../service/datos.service';
import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/model/Pago';

@Component({
  selector: 'app-tabla-coatizacion',
  templateUrl: './tabla-coatizacion.component.html',
  styleUrls: ['./tabla-coatizacion.component.css']
})
export class TablaCoatizacionComponent implements OnInit {

  pagos: Pago[] = [];
  monto: number = 0;
  periodo: number = 0;
  tasa: number = 0;
  fecha: string = "";

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.pagos = this.datosService.getPagos();
    this.monto = this.datosService.getMonto();
    this.periodo = this.datosService.getPeriodo();
    this.tasa = this.datosService.getTasa();
    this.fecha = this.Obtener_fecha();
  }

  Obtener_fecha(): string {

    const fechaActual = new Date();

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const diaSemana = diasSemana[fechaActual.getDay()];

    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por eso se suma 1
    const anio = fechaActual.getFullYear();

    return `${diaSemana}, ${dia}/${mes}/${anio}`;
  }
}
