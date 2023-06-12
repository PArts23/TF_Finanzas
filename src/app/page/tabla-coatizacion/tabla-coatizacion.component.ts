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

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.pagos = this.datosService.getPagos();
  }

}
