import { Pago } from "../model/Pago";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private pagos: Pago[] = [];
  private monto: number = 0;
  private periodo: number = 0;
  private tasa: number = 0;

  setPagos(pagos: Pago[]) {
    this.pagos = pagos;
  }

  getPagos() {
    return this.pagos;
  }

  setMonto(monto: number) {
    this.monto = monto;
  }

  getMonto() {
    return this.monto;
  }

  setPeriodo(periodo: number) {
    this.periodo = periodo;
  }

  getPeriodo() {
    return this.periodo;
  }

  setTasa(tasa: number) {
    this.tasa = tasa;
  }

  getTasa() {
    return this.tasa;
  }
}
