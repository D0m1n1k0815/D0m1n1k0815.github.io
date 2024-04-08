import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { KursComponent } from './kurs/kurs.component';
import { KursFilternComponent } from './kurs-filtern/kurs-filtern.component';
import { ProfFilternComponent } from './prof-filtern/prof-filtern.component';
import { ProfessorComponent } from './professor/professor.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    KursComponent,
    KursFilternComponent,
    ProfFilternComponent,
    ProfessorComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: MainPageComponent},
            {path: 'Professor', component: ProfessorComponent},
            {path: 'Kurs', component: KursComponent},
            {path: 'Kurs-Filtern', component: KursFilternComponent},
            {path: 'Prof-Filtern', component: ProfFilternComponent}
        ]),
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
