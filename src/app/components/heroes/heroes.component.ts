import { Component } from '@angular/core';
import { HeroesService, Heroe} from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  heroes:Heroe[]=[]

  ngOnInit(): void{

  this.heroes = this._heroesService.getHeroes();
  }

  constructor(public _heroesService:HeroesService, private router:Router){
   
  }
  
  verHeroe(ob: Heroe){
    console.log(ob);
    this.router.navigate(['/heroe',this.heroes.indexOf(ob)]);
  }
}

