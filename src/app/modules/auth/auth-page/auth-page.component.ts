import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  // errores
  errorUsername: string = '';
  errorContrasena = '';

  // formulario
  formulario!: FormGroup;

  //servicios
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      username: ['', [
        Validators.required,
        // Validators.email
      ]],
      contrasena: ['', [
        Validators.required
      ]],
      recordar: ['', []]
    })
  }

  entrar() {
    this.mensajesError() //verificamos errores

    if (this.formulario.valid) {
      //se supondria que se manda al back, se obtiene un token de acceso y cosas funcionales.
    }
  }

  mensajesError() {
    //crear servicio que muestra los mensajes de error
  }

}
