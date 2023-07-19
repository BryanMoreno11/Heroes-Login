import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
nombre:string='';
anio:string='';
bio:string='';
casa:string='';
imagen:string='';

constructor(private _heroesService:HeroesService){

}

insertHeroe(nombre:string,anio:string,bio:string,casa:string,imagen:string){
  this._heroesService.insertarHeroe(this.nombre,this.anio,this.bio,this.casa, this.imagen.replaceAll('\\','/'));
  console.log(this.imagen);
}

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.imagen = URL.createObjectURL(file); // Convertir el archivo en una URL válida para la imagen.
  }
}

}
