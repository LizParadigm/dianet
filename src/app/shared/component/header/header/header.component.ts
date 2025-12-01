import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from "@angular/router";
import { RutService } from '../../../services/rut/rut.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  inicio: string = '/registrar';
  mostrarHeader: boolean = false;
  version!: boolean;


  constructor(
    private router: Router,
    private rut: RutService,
  ) {

    // subscripcion para que el header sepa cuando mostra que cosa dentro del propio componente.
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const version = this.rut.controlHeader();
        switch (version) {
          case 1:
            this.mostrarHeader = true
            this.version = true;
            this.inicio = '/home';
            break;
          case 2:
            this.mostrarHeader = true;
            this.version = false;
            this.inicio = '/registrar';
            break
          case 3:
            this.mostrarHeader = false;
            break;
        }
      }
    })

  }
  ngOnInit(): void {
  }

}
