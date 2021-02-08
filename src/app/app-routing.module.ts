import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'hello-world',
    loadChildren: () =>
      import('inicializacao-remote/inicializacao-route.module')
        .then((m) => m.InicializacaoRouteModule)
  },
];
