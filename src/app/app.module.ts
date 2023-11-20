import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { FormsModule } from '@angular/forms';
import { PainelComponent } from './components/painel/painel.component';
import { NotasTableComponent } from './tabelas/notas-table/notas-table.component';
import { FaltasTableComponent } from './tabelas/faltas-table/faltas-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    CadastroFormComponent,
    PainelComponent,
    NotasTableComponent,
    FaltasTableComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
