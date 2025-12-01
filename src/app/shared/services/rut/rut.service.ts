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
    // decide si se muestra o no el header dependiendo la ruta actual y define si el usuario esta logueado o no dependiendo del contenido del localstorage
    let version = 3; // version para header registrar false, version para header interior true. null es igual a inisicar sesion y recuperar
    let usuario = false;//si hay algo en el storagelocal entonces se muestran los links interiores de la app web, si no hay nada entonces los de usuario no registrado, osea registrar
    //retornamos mostrar: true or false. permisos storage true or false
    switch (this.router.url) {
      case '/home':
      case '/historial':
      case '/resultado':
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
    this.router.navigateByUrl('/consulta');
  }

}
