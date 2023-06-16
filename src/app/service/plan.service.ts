import { Injectable } from '@angular/core';
import { Pago } from '../model/Pago';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }
  private nominal: boolean = false;
  private efectiva: boolean = false;
  private soles: boolean = false;
  private dolares: boolean = false;
  private capitalizar: string = "";

  Cargar_condiciones(tasaNominal: boolean, tasaEfectiva: boolean, capitalizar: string, soles: boolean, dolares: boolean) {

    this.nominal = tasaNominal;
    this.efectiva = tasaEfectiva;
    this.soles = soles;
    this.dolares = dolares;
    this.capitalizar = capitalizar;
  }

  Calcular_cuotizacion(tasa: number, monto: number, periodo: number, seguro: number) {

    let pagos: Pago[] = [];
    let tasa_frec = tasa / 100;
    let tasa_seg = seguro / 100;

    let saldo_restante = monto;

    if (this.efectiva! && this.nominal) {

      let m: number = Calcular_capitalizacion();
      let n: number = ;

      tasa_frec = Math.pow(1 + tasa_frec / m, n) - 1;
    }
    else if (this.efectiva! && this.nominal) {

      let n1: number = ;
      let n2: number = ;
      tasa_frec = Math.pow(1 + tasa_frec, n2 / n1) - 1;
    }

    let cuota = (monto * (tasa_frec + tasa_seg)) / (1 - Math.pow(1 + tasa_seg + tasa_frec, -periodo));

    for (let i = 0; i < periodo; i++) {

      const intereses = saldo_restante * tasa_frec;
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

