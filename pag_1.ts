import { Component } from '@angular/core';

@Component({

  templateUrl: './pagina_1.component.html',
  styleUrls: ['./pagina_1.component.css']

})
export class pagina_1Component {
  title = 'projeto_unidas';
  atendentes = ['Atendente 1', 'Atendente 2', 'Atendente 3']
  text = "";
  results!: string[];
  search(event: any) {
    console.log("text:" + this.text);
    console.log(event);

    this.results = this.atendentes.filter(a=> a.startsWith(event.query));
    console.log(this.results);
  }
}

