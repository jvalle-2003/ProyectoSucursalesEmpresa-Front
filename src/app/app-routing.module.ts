import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { ProductsComponent } from './components/products/products.component';
import { SucursalesEmpresaComponent } from './components/sucursales/sucursales-empresa.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


import { UserComponent } from './components/user/user.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'enterprise',  canActivate:[UserGuard], component: UserComponent},
  {path: 'enterprises',  canActivate:[UserGuard], component: EnterpriseComponent},
  {path: 'products',  canActivate:[UserGuard], component: ProductsComponent},
  {path: 'sucursal',  canActivate:[UserGuard], component: SucursalesEmpresaComponent},

  //RUTA DE EXCEPCIÓN 404
  {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
