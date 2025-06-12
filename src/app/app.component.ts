import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComprasComponent} from "./lista-compras/lista-compras.component"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,   ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularProjeto4';
}
