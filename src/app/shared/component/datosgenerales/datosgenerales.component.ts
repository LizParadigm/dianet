import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajeErrorService } from '../../services/mensajeError/mensaje-error.service';

@Component({
  selector: 'app-datosgenerales',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './datosgenerales.component.html',
  styleUrl: './datosgenerales.component.css'
})
export class DatosgeneralesComponent implements OnInit {
  errorEdad: String = '';
  errorSexo: String = '';
  errorPeso: String = '';
  errorEstatura: String = '';
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private error: MensajeErrorService
  ) { }
  ngOnInit(): void {
    this.formulario = this.fb.group({
      edad: ['', [
        Validators.required
      ]],
      sexo: ['', [
        Validators.required
      ]],
      peso: ['', [
        Validators.required
      ]],
      estatura: ['', [
        Validators.required
      ]]
    })
  }
  @Output() cerrar = new EventEmitter<void>();

  close() {
    this.cerrar.emit();
  }


  guardar(): void {
    this.mensajesError();
    if (this.formulario.valid) {
      console.log('formulario valido')
      localStorage.removeItem('nuevo');
      setTimeout(() => {
        this.cerrar.emit();
      }, 300);
    }
    else {
      console.log('hay problemas')
    }
  }

  mensajesError(): void {
    this.errorEdad = this.error.generalEdad(this.formulario.get('edad'));
    this.errorSexo = this.error.generalSexo(this.formulario.get('sexo'));
    this.errorPeso = this.error.generalpeso(this.formulario.get('peso'));
    this.errorEstatura = this.error.generalEstatura(this.formulario.get('estatura'));
  }

}
