import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import datosjson from '../../../data/home.json'
import { CommonModule } from '@angular/common';
import { RutService } from '../../../shared/services/rut/rut.service';
import Chart from 'chart.js/auto';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';
import { DatosgeneralesComponent } from '../../../shared/component/datosgenerales/datosgenerales.component';


@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css',
  animations: [
    trigger('resumenAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('250ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('200ms ease-in',
          style({ opacity: 0, transform: 'translateY(10px)' })
        )
      ])
    ])
  ]

})
export class InicioPageComponent implements OnInit, AfterViewInit {
  datos = datosjson;
  target: any | null;
  mostrarResumen: boolean = false;
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

  constructor(
    private rut: RutService, private http: HttpClient
  ) { }


  public chart!: Chart;


  ngOnInit(): void {
    this.cargarDatos();
  }
  ngAfterViewInit(): void {
    this.solicitarDatosGenerales();
  }
  solicitarDatosGenerales(): void {
    if (localStorage.getItem('nuevo')) {
      // Crear el componente modal
      const comp = this.modalContainer.createComponent(DatosgeneralesComponent);

      // Escuchar cuando el modal pida cerrarse
      comp.instance.cerrar.subscribe(() => {
        this.modalContainer.clear();
      });
    }
  }


  cargarDatos() {
    // const primerosTres = this.datos.slice(0, 3);   // ***solo los primeros 3***
    this.createChart(this.datos);
  }

  createChart(datos: any[]) {

    const labels = datos.map(item => item.fechaConsulta);
    const valores = datos.map(item => item.probabilidadDesarrollo);

    this.chart = new Chart("myBarChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: valores,
          backgroundColor: valores.map(v =>
            v < 40 ? 'rgba(75, 192, 192, 0.5)' :
              v < 70 ? 'rgba(255, 206, 86, 0.5)' :
                'rgba(255, 99, 132, 0.5)'
          ),
          borderColor: valores.map(v =>
            v < 40 ? 'rgb(75, 192, 192)' :
              v < 70 ? 'rgb(255, 206, 86)' :
                'rgb(255, 99, 132)'
          ),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false   // 👈 oculta la leyenda
          }
        },

        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 100
          },
        },

        // CLICK EN LAS BARRAS
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index; // qué barra se clickeó
            this.cargarResumen(datos[index]);      // llamar tu función
          }
        }
      }
    });
  }

  cargarResumen(item: any): void {
    console.log(item)
    console.log(this.target)
    // Si clickeó el MISMO item → ocultar
    if (this.target && this.target.id === item.id) {
      this.mostrarResumen = false;
      this.target = null;
    }
    else {
      // Si es un item diferente → mostrar
      this.mostrarResumen = true;
      this.target = item;
    }

  }





  seleccionar(id: number): void {
    this.target = this.datos.find(c => c.id === id);
    console.log('Seleccionado:', this.target);
  }

  iniciarConsulta() {
    this.rut.consulta();
  }

}
