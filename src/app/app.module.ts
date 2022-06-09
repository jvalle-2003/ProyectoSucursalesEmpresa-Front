import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SucursalesEmpresaComponent } from './components/sucursales/sucursales-empresa.component';

import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './components/user/user.component';
import { SearchPipe } from './pipes/search.pipe';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    NavbarComponent,
    SearchPipe,
    EnterpriseComponent,
    ProductsComponent,
    SucursalesEmpresaComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
