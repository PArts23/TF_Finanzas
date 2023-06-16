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
  private tasa_seg: number = 0;

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

  setTasaSeg(tasa_seg: number) {
    this.tasa_seg = tasa_seg;
  }

  getTasaSeg() {
    return this.tasa_seg;
  }

  getVNA() {

    let VAN: number = this.pagos[0].cuota * ((1 - Math.pow(1 + this.tasa, -this.periodo) / this.tasa));

    return this.monto + VAN;
  }

  getTIR() {

    let TIR: number = this.monto;

    for (let i = 1; i <= this.pagos.length; i++) {

      TIR += this.pagos[i].cuota / (1 + this.tasa, i)
    }
    return TIR;
  }
}
