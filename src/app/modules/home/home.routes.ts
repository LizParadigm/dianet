import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ConsultaPageComponent } from './consulta-page/consulta-page.component';
import { ResultadoPageComponent } from './resultado-page/resultado-page.component';
import { InicioPageComponent } from './inicio-page/inicio-page.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: InicioPageComponent
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
