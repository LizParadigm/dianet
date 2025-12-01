import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-resultado-page',
  templateUrl: './resultado-page.component.html',
  styleUrls: ['./resultado-page.component.css'],
  imports: [CommonModule]
})
export class ResultadoPageComponent {

  regresar() {
    history.back();
  }

  descargarResultados() {
    alert("Descargando PDF...");
  }
}
