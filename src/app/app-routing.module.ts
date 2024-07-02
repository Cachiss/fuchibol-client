import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEquipoComponent } from './pages/agregar-equipo/agregar-equipo.component';
import { ListarEquiposComponent } from './pages/listar-equipos/listar-equipos.component';
import { EditarEquipoComponent } from './pages/editar-equipo/editar-equipo.component';

const routes: Routes = [

  {path:'',pathMatch:'full',
    redirectTo:'agregar-equipo'
  },
  {path:'agregar-equipo',
    component: AgregarEquipoComponent
  },
  {path:'listar-equipos',
    component:ListarEquiposComponent
  },
  {path:'editar-equipo/:id',
    component:EditarEquipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
