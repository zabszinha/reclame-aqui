import { Component } from '@angular/core';

@Component({

  templateUrl: './pagina_2.component.html',
  styleUrls: ['./pagina_2.component.css']

})
export class pagina_2Component {
  title = 'projeto_unidas';
  atendentes = ['Atendente 1', 'Atendente 2', 'Atendente 3'];
  atendentes_filtrados = ['Atendente 1', 'Atendente 2', 'Atendente 3']
  filtro = ''
  filtrar() { this.atendentes_filtrados = this.atendentes.filter(a=> a.includes(this.filtro))
    
  }

}
