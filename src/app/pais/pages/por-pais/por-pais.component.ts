import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent {

  
  existeError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  termino: string = '';
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService){}

  buscar(termino: string) : void{
    this.mostrarSugerencias = false;
    this.existeError = false;
    this.termino = termino; 
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.existeError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string): void{

    if(!termino){
      this.mostrarSugerencias = false;
      return;
    }
    this.existeError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    

    this.paisService.buscarPais(termino)
      .subscribe(
        (paises) => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []
      )
  }
  
}
