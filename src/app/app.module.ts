import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule } from '@angular/forms';
import { AutenticacionService } from './autenticacion.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
