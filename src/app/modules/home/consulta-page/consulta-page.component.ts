import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // <-- IMPORTANTE
import { RutService } from '../../../shared/services/rut/rut.service';

@Component({
  standalone: true,
  selector: 'app-consulta-page',
  templateUrl: './consulta-page.component.html',
  styleUrls: ['./consulta-page.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ConsultaPageComponent {
  constructor(
    private rut: RutService
  ) { }

  mostrarPreguntas: boolean = false;

  onResponder() {
    this.mostrarPreguntas = true;
  }

  dieta = {
    equilibrada: false,
    saludable: false
  };

  siguiente() {
    console.log("Dieta:", this.dieta);
  }

  onSubmit(form: any) {
    console.log("Formulario enviado:", form.value);
    alert("Formulario enviado correctamente 🎉");
    this.finalizar()
  }
  paso = 0;

  iniciar() {
    this.paso = 1;
  }

  siguientePaso() {
    if (this.paso < 5) this.paso++;
  }

  finalizar() {
    // lógica final
    console.log("Formulario completado");
    setTimeout(() => {
      this.rut.resultado()
    }, 3000);
  }

}
