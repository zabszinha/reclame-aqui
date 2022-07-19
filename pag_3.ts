import { Component, ViewEncapsulation } from '@angular/core';

@Component({

  templateUrl: './pagina_3.component.html',
  styleUrls: ['./pagina_3.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class pagina_3Component {
    title = 'projeto_unidas';
    atendentes = ['Atendente 1', 'Atendente 2', 'Atendente 3'];
    selectedAtendente =''

}
