import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroProductosComponent } from './pages/cliente/tablero-productos/tablero-productos.component';
import { CaracteristicaProductosComponent } from './pages/cliente/caracteristica-productos/caracteristica-productos.component';
import { ProcesoComprasComponent } from './pages/cliente/proceso-compras/proceso-compras.component';
import { ClienteComponent } from "./pages/cliente/cliente.component";
import { CheckAdminGuard } from "./guards/check-admin.guard";
import { CheckLoginGuard } from "./guards/check-login.guard";
import { LoginComponent } from './pages/Login-Register/login/login.component';
import { RegistroComponent } from './pages/Login-Register/registro/registro.component';
import { AuthGuard } from "./guards/check-auth.guard";
import { ForgotPasswordComponent } from './pages/Login-Register/forgot-password/forgot-password.component';
import { CreateNewPasswordComponent } from './pages/Login-Register/create-new-password/create-new-password.component';
import { GeoComponent } from './pages/geo/geo.component';







const routes: Routes = [

  { path: "cliente", component: ClienteComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, canActivate: [CheckLoginGuard]},
  { path: "signup", component: RegistroComponent },
  { path: "forgot-password", component: ForgotPasswordComponent},
  { path: "create-new-password/:token", component: CreateNewPasswordComponent},
  {path: "geo", component: GeoComponent},
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
