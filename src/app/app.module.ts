import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
/*Enrutadores de Navegacion*/
import { RouterModule, Route } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InformacionComponent } from './informacion/informacion.component';



/*Constantes de Rutas y Navegacion*/
const routes: Route[] = [
  {path: '', component: PrincipalComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'info', component: InformacionComponent}

];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, PrincipalComponent, FooterComponent, ContactoComponent, InformacionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
