import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { MensajeErrorService } from '../../../shared/services/mensajeError/mensaje-error.service';
import { RutService } from '../../../shared/services/rut/rut.service';

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
    private fb: FormBuilder,
    private errores: MensajeErrorService,
    private route: RutService
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
      this.route.home();
    }
  }

  mensajesError() {
    this.errorUsername = this.errores.registrarNombre(this.formulario.get('username'));
    this.errorContrasena = this.errores.iniciarContrasena(this.formulario.get('contrasena'));
  }

}
