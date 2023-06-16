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
  soles = false;
  dolares = false;

  constructor(public route: ActivatedRoute, private planService: PlanService) {

    this.formulario = new FormGroup({

      Soles: new FormControl(true),
      Dolares: new FormControl(false)
    });
  }

  Subir_condiciones() {

    this.planService.Cargar_condiciones(this.tasaNominal, this.tasaEfectiva, this.capitalizar, this.soles, this.dolares);
  }
}
