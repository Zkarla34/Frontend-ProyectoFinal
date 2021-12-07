import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mis-componentes/home/home.component';
import { LandingComponent } from './mis-componentes/landing/landing.component';
import { PlanesComponent } from './mis-componentes/planes/planes.component';
import { PerfilComponent } from './mis-componentes/perfil/perfil.component';
import { MapaComponent} from './mis-componentes/mapa/mapa.component';
import { CarritoComponent } from './mis-componentes/carrito/carrito.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'carrito', component: CarritoComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
