import { Routes } from "@angular/router";
import { AuthPageComponent } from "./auth-page/auth-page.component";
import { RecuperarPageComponent } from "./recuperar-page/recuperar-page.component";
import { RegistrarComponent } from "./registrar/registrar.component";

export const AUTH_ROUTES: Routes = [
    {
        path: "",
        component: AuthPageComponent
    },
    {
        path: "recuperar-cuenta",
        component: RecuperarPageComponent
    },
    {
        path: "registrar",
        component: RegistrarComponent
    }
]