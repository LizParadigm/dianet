import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ConsultaPageComponent } from './consulta-page/consulta-page.component';
import { ResultadoPageComponent } from './resultado-page/resultado-page.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'consulta',
    component: ConsultaPageComponent
  },
  {
    path: 'resultados',
    component: ResultadoPageComponent
  }
];
