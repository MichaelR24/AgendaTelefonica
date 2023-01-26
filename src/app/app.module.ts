import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularAdaugareComponent } from './formular-adaugare/formular-adaugare.component';
import { ListaContacteComponent } from './lista-contacte/lista-contacte.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularAdaugareComponent,
    ListaContacteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
