import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header/header.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  errorNombre!: boolean;
  errorApellidoP!: boolean;
  errorApellidoM!: boolean;
  errorCorreo!: boolean;
  errorContrasena!: boolean;
  errorRContrasena!: boolean;
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder
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

  }

}
