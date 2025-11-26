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

}
