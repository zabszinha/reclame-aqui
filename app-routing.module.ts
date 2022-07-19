import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pagina_1Component } from './pagina_1/pagina_1.component';
import { pagina_2Component } from './página_2/pagina_2.component';
import { pagina_3Component } from './pagina_3/pagina_3.component';


const routes: Routes = [{
  path: 'pagina_1',

  data: {
    breadcrumb: 'pagina_1',
    
  },
  component: pagina_1Component

},{

  path: 'pagina_2',

  data: {

    breadcrumb: 'pagina_2',
    
  },

  component: pagina_2Component

},{
  
  path: 'pagina_3',

  data: {

    breadcrumb: 'pagina_3',
    
  },

  component: pagina_3Component

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
