import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  constructor(private paisService: PaisService){}

  paises : Country[] = [];
  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  activarRegion(region: string) {
    if(region === this.regionActiva) return;
    
    this.regionActiva = region;
    this.paises = []
    this.paisService.buscarPaisPorRegion(region)
      .subscribe((paises) => {
        this.paises = paises;
      })
  }

  getClaseCSS(region: string) : string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
