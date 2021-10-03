import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  
  existeError: boolean = false;
  paises: Country[] = [];
  termino: string = '';

  constructor(private paisService: PaisService){}

  buscar(termino: string) : void{
    this.existeError = false;
    this.termino = termino; 
    this.paisService.buscarPaisPorCapital(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.existeError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string): void{
    this.existeError = false;
  }
  
}
