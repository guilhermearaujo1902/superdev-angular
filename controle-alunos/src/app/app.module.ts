import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudanteComponent } from './componentes/estudante/estudante.component';
import { EstudanteListaComponent } from './componentes/estudante-lista/estudante-lista.component';
import { EstudanteFormComponent } from './componentes/estudante-form/estudante-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EstudanteComponent,
    EstudanteListaComponent,
    EstudanteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
