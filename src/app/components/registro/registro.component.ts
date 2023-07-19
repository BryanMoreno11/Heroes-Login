import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
  email:string="";
  password:string="";

  constructor(
    private _heroes: HeroesService,
    private router: Router
  ) {
    
  }

  

  guardar() {
    this._heroes.registro(this.email,this.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']
       ) ; window.alert("Ingreso exitoso!");
      })
      .catch(error => {console.log(error);
      window.alert("Ingrese una cuenta válida")});
  }
}
