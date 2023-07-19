import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate,AuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
{path: 'home', component: HomeComponent}, 
{path: 'about', component: AboutComponent}, 
{path: 'heroes', component: HeroesComponent}, 
{path: 'heroe/:id', component: HeroeComponent}, 
{path:'formulario', component: FormularioComponent,canActivate:[AuthGuard]},
{path:'registro',component:RegistroComponent},
{path:'login',component:LoginComponent},
{path: '**', pathMatch:'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
