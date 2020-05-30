import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
/*Enrutadores de Navegacion*/
import { RouterModule, Route } from "@angular/router";


/*https://proyectoprog3.stackblitz.io/*/

/*Constantes de Rutas y Navegacion*/
const routes: Route[] = [
  {path: '', component: PrincipalComponent},

];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, PrincipalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
