import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-consulta-page',
  templateUrl: './consulta-page.component.html',
  styleUrls: ['./consulta-page.component.css'],
  imports: [FormsModule]
})
export class ConsultaPageComponent {

  mostrarPreguntas = false;

  dieta = {
    equilibrada: false,
    saludable: false
  };

  onResponder() {
    this.mostrarPreguntas = true;
  }

  onSubmit(form: any) {
    console.log("Formulario enviado:", form.value);
    alert("Formulario enviado correctamente 🎉");
  }
}
