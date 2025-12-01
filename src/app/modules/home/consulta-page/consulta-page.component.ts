import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // <-- IMPORTANTE

@Component({
  standalone: true,
  selector: 'app-consulta-page',
  templateUrl: './consulta-page.component.html',
  styleUrls: ['./consulta-page.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ConsultaPageComponent {

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
  }
}
