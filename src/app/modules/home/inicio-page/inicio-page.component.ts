import { Component, OnInit } from '@angular/core';
import datosjson from '../../../data/home.json'
import { CommonModule } from '@angular/common';
import { RutService } from '../../../shared/services/rut/rut.service';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent implements OnInit {
  datos = datosjson;
  target: any | null;

  constructor(
    private rut: RutService
  ) { }
  ngOnInit(): void {
  }


  seleccionar(id: number): void {
    this.target = this.datos.find(c => c.id === id);
    console.log('Seleccionado:', this.target);
  }

  iniciarConsulta() {
    this.rut.consulta();
  }

}
