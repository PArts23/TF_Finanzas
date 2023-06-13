import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-coatizacion1',
  templateUrl: './coatizacion1.component.html',
  styleUrls: ['./coatizacion1.component.css']
})

export class Coatizacion1Component{

  formulario: FormGroup;

  tipo_tasa: string = '';
  capitalizar: string = '';
  per_gracia: string = '';
  moneda: string = '';

  constructor(public route: ActivatedRoute) { 

    this.formulario = new FormGroup({
      tNominal: new FormControl(true),
      tEfectiva: new FormControl(false),
      Soles: new FormControl(true),
      Dolares: new FormControl(false)
    });
  }

  submitForm() {

    // Aquí puedes realizar acciones adicionales con el valor numérico ingresado
  }

}
