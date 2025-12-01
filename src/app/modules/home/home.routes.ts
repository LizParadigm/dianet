import { Routes } from "@angular/router";
import { InicioPageComponent } from "./inicio-page/inicio-page.component";

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: InicioPageComponent
  },
  {
    path: 'consulta',
    loadComponent: () =>
      import('./consulta-page/consulta-page.component').then(m => m.ConsultaPageComponent)
  }
];
