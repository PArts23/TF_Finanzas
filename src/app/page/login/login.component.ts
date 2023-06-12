import { Client } from './../../model/Client';
import { ClientService } from './../../service/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private clientservice: ClientService,
    private route: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.LoginForm();
  }

  LoginForm() {
    this.myForm = this.formbuilder.group(
      {
        email: [""],
        password: [""],
      }
    )
  }

  loginUser() {
    let email: string; let password: string;
    email = this.myForm.get("email")?.value;
    password = this.myForm.get("password")?.value;

    this.clientservice.getClientAsAny().subscribe(
      res => {
        const user = res.find((a: Client) => {
          return a.email == email && a.password == password;
        });
        if (user) {
          this.snackbar.open("Ingresó correctamente.", 'OK', {
            duration: 3000
          });
          this.route.navigate(['main', user.id]);
        } else {
          this.snackbar.open("El correo o la contraseña son incorrectos", 'OK', {
            duration: 3000
          });
        }
      });
  }
}

