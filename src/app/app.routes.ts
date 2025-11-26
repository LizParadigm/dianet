import { Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth/auth-page/auth-page.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/auth/auth.routes').then(module => module.AUTH_ROUTES)
    },
    {
        path: 'home',
        component: HomePageComponent,
        loadChildren: () => import('./modules/home/home.routes').then(module => module.HOME_ROUTES)
    }
];
