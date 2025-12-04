import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RutService {

  constructor(
    private router: Router
  ) { }

  home() {
    this.router.navigateByUrl('/home');
  }
  controlHeader() {

    let version = 3;

    switch (this.router.url) {
      case '/home':
      case '/home/historial':
      case '/home/consulta':
      case '/home/resultados':
        version = 1;
        break;
      case '/registrar':
        version = 2;
        break;
      default:
        version = 3;
        break;
    }
    return version;
  }

  consulta() {
    this.router.navigateByUrl('/home/consulta');
  }
  salir() {
    this.router.navigateByUrl('/')
  }
  resultado() {
    this.router.navigateByUrl('/home/resultados');
  }

}
