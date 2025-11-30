import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header/header.component';
import { RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  ngOnInit(): void {
  }

  registrar() {

  }

}
