import { Pago } from "../model/Pago";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private pagos: Pago[] = [];

  setPagos(pagos: Pago[]) {
    this.pagos = pagos;
  }

  getPagos() {
    return this.pagos;
  }
}
