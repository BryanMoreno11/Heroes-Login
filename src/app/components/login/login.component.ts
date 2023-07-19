import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string="";
  password:string="";

  constructor(private _heroes: HeroesService, private router:Router) {
    
  }

  

  guardar() {
    this._heroes.login(this.email,this.password)
      .then(response => {
        console.log(response)
        window.alert("Ingreso exitoso");
      })
      .catch(error => {console.log(error)
      window.alert("Error\nIgrese bien los datos")});
  }

  looginGoogle(){
    this._heroes.loginGoogle()
    .then(response=>{
    this.router.navigate(['/home']);
    })
    .catch(error=>{
      window.alert("Error con el Login");
    })
  }
}
