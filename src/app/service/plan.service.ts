import { Injectable } from '@angular/core';
import { Pago } from '../model/Pago';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  Calcular_cuotizacion(tasa: number, monto: number, periodo: number, seguro: number) {

    const pagos: Pago[] = [];

    const tasa_men = tasa / 100;
    const tasa_seg = seguro / 100;
    const cuota = (monto * (tasa_men + tasa_seg)) / (1 - Math.pow(1 + tasa_seg + tasa_men, -periodo));

    let saldo_restante = monto;

    for (let i = 0; i < periodo; i++) {

      const intereses = saldo_restante * tasa_men;
      const amortizacion = cuota - intereses - saldo_restante * tasa_seg;

      const nuevo_pago: Pago = {
        monto_seguro: saldo_restante * tasa_seg,
        saldo: saldo_restante - amortizacion,
        periodo: i + 1,
        cuota: cuota,
        amortizacion: amortizacion,
        interes: intereses
      };

      pagos.push(nuevo_pago)
      saldo_restante -= amortizacion;
    }

    return pagos;
  }

  Calcular_cuota(tasa: number, monto: number, periodo: number): number {

    const tasa_men = tasa / 100;
    return monto * tasa_men / (1 - Math.pow(1 + tasa_men, -periodo));
  }
}

