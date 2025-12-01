import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MensajeErrorService } from '../../../shared/services/mensajeError/mensaje-error.service';
import { CommonModule } from '@angular/common';
import { RutService } from '../../../shared/services/rut/rut.service';

@Component({
  selector: 'app-recuperar-page',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar-page.component.html',
  styleUrl: './recuperar-page.component.css'
})
export class RecuperarPageComponent implements OnInit {
  errorCorreoElectronico: string = '';
  errorCodigo: string = '';
  errorContrasena: string = '';
  errorConfirmarContrasena: string = '';
  contrasenaConcuerda!: boolean;
  // pasos:
  paso1: boolean = true;
  paso2: boolean = false;
  paso3: boolean = false;
  mensaje: boolean = false;

  datosRecuperar!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: RutService,
    private errores: MensajeErrorService
  ) { }
  ngOnInit(): void {
    this.datosRecuperar = this.fb.group({
      correoElectronico: ['', [Validators.required, Validators.email], [/*validar si el correo existe en la base de datos.*/]],
      codigo: ['', [Validators.required, Validators.minLength(7)], [/*validar si el codigo es el codigo correcto. */]],
      contrasena: ['', [Validators.required, Validators.minLength(8)],],
      confirmarContrasena: ['', [Validators.required],],
    });

    this.datosRecuperar.get('confirmarContrasena')?.valueChanges.subscribe((contra2) => {
      console.log('contraseña: ', this.datosRecuperar.get('contrasena')?.value)
      console.log('contraseña reconfirmar:', contra2)
      if (this.datosRecuperar.get('contrasena')?.value === contra2) {
        this.contrasenaConcuerda = true;
      }
      else {
        this.contrasenaConcuerda = false;
      }
    });
  };

  verificarCodigo() {
    const codigo = this.datosRecuperar.value.codigo;
    if (codigo === '1234567') {
      return true
    }
    else {
      return false
    }
  }

  //botones:
  siguientePaso(): void {
    if (this.paso2 === true) {
      this.errorCodigo = this.errores.ingresarCodigoRecuperacion(
        this.datosRecuperar.get('codigo')?.hasError('required') ?? false,
        this.datosRecuperar.get('minLenght')?.hasError('minLenght') ?? false,
        this.verificarCodigo()
      );
      if (this.verificarCodigo()) {
        this.paso2 = false;
        this.paso3 = true;
      }
    }
    else if (this.paso3 === true) {
      this.errorContrasena = this.errores.registrarContrasena(this.datosRecuperar.get('contrasena'));

      this.errorConfirmarContrasena = this.errores.registrarConfirmarContrasena(
        this.datosRecuperar.get('confirmarContrasena')?.hasError('required') ?? false,
        this.contrasenaConcuerda
      )
      console.log(this.datosRecuperar, this.contrasenaConcuerda)
      if (this.datosRecuperar.valid && this.contrasenaConcuerda) {
        this.paso3 = false;
        this.mensaje = true;
        this.recuperar();
      }
      else {
        console.log('notificacion error')
      }
    }

  };
  pasoUno() {
    this.errorCorreoElectronico = this.errores.ingresarCorreo(
      (this.datosRecuperar.get('correoElectronico')?.hasError('required') ?? false),
      (this.datosRecuperar.get('correoElectronico')?.hasError('email') ?? false),
    );
    if (this.datosRecuperar.get('correoElectronico')?.valid) {
      const correo = this.datosRecuperar.value.correoElectronico;
      console.log('verificacion exitosa: ', correo);
      if (correo === 'jesss635000@gmail.com') {
        this.paso1 = false;
        this.paso2 = true;
      }
      else {
        this.errorCorreoElectronico = 'Correo no encontrado.';
      }
    }
  }

  pasoDos() {
    this.errorCodigo = this.errores.ingresarCodigoRecuperacion(
      this.datosRecuperar.get('codigo')?.hasError('required') ?? false,
      this.datosRecuperar.get('minLenght')?.hasError('minLenght') ?? false,
      this.verificarCodigo()
    );
    if (this.verificarCodigo()) {
      this.paso2 = false;
      this.paso3 = true;
    }
  }

  recuperar() {

    setTimeout(() => {
      this.route.home();
    }, 3000);

  }



}
