import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/component/header/header/header.component";
import { RouterOutlet } from '@angular/router';
import { ConsultaPageComponent } from '../consulta-page/consulta-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ConsultaPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
