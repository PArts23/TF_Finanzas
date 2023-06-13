import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-coatizacion1',
  templateUrl: './coatizacion1.component.html',
  styleUrls: ['./coatizacion1.component.css']
})

export class Coatizacion1Component {

  tasaEfectiva = false;
  tasaNominal = false;
  formulario: FormGroup;
  string = '';
  capitalizar: string = '';
  per_gracia: string = '';
  moneda: string = '';

  constructor(public route: ActivatedRoute, private planService: PlanService) {

    this.formulario = new FormGroup({
      Soles: new FormControl(true),
      Dolares: new FormControl(false)
    });
  }

  onCheckboxChange() {
    if (this.tasaEfectiva && this.tasaNominal!) {
      this.tasaNominal = true;
      this.tasaEfectiva = false;
    }

    else
      if (this.tasaEfectiva! && this.tasaNominal) {
        this.tasaNominal = false;
        this.tasaEfectiva = true;
      }
  }

  Subir_condiciones() {

    //this.planService. ;
  }
}
