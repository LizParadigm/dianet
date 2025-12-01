import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header/header.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MensajeErrorService } from '../../../shared/services/mensajeError/mensaje-error.service';
import { RutService } from '../../../shared/services/rut/rut.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [HeaderComponent,
    ReactiveFormsModule,
    CommonModule, RouterLink],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent implements OnInit {
  errorNombre: String = '';
  errorApellidoP: String = '';
  errorApellidoM: String = '';
  errorCorreo: String = '';
  errorContrasena: String = '';
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private errores: MensajeErrorService,
    private rut: RutService
  ) { };
  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.minLength(3),
      ]],

      apellidoP: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.minLength(3),
      ]],

      apellidoM: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/),
        Validators.minLength(3),
      ]],
      correo: ['', [
        Validators.required,
        Validators.email,
      ]],
      contrasena: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }



  registrar() {
    this.mensajesError();
    if (this.formulario.valid) {
      this.rut.home();
      localStorage.setItem('nuevo', 'true');
    }
  }

  mensajesError() {
    this.errorNombre = this.errores.registrarNombre(this.formulario.get('nombre'));
    this.errorApellidoP = this.errores.registrarApellido(this.formulario.get('apellidoP'));
    this.errorApellidoM = this.errores.registrarApellido(this.formulario.get('apellidoM'));
    this.errorCorreo = this.errores.registrarCorreo(this.formulario.get('correo'));
    this.errorContrasena = this.errores.registrarContrasena(this.formulario.get('contrasena'));
  }
}
