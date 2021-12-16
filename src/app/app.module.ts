import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
//google maps

import { AppComponent } from './app.component';
import { HeaderComponent } from './mis-componentes/header/header.component';
import { FooterComponent } from './mis-componentes/footer/footer.component';
import { LandingComponent } from './mis-componentes/landing/landing.component';
import { CarruselComponent } from './mis-componentes/landing/carrusel/carrusel.component';
import { ModalComponent } from './mis-componentes/landing/modal/modal.component';
import { HomeComponent } from './mis-componentes/home/home.component';
import { ModalhomeComponent } from './mis-componentes/home/modalhome/modalhome.component';
import { PlanesComponent } from './mis-componentes/planes/planes.component';
import { PerfilComponent } from './mis-componentes/perfil/perfil.component';
import { ModalperfilComponent } from './mis-componentes/perfil/modalperfil/modalperfil.component';
import { MapaComponent} from './mis-componentes/mapa/mapa.component';
import { CarritoComponent } from './mis-componentes/carrito/carrito.component';
import { MensajesComponent } from './mis-componentes/mensajes/mensajes.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    CarruselComponent,
    ModalComponent,
    HomeComponent,
    ModalhomeComponent,
    PlanesComponent,
    PerfilComponent,
    ModalperfilComponent,
    MapaComponent,
    CarritoComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    HttpClientModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }