import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService : PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({codigo}) => this.paisService.buscarPaisPorCodigo(codigo))
      )
      .subscribe(([pais]) => this.pais = pais)

    // this.activatedRoute.params
    //   .subscribe(({ codigo }) => {
    //     this.paisService.buscarPaisPorCodigo(codigo)
    //       .subscribe(([pais]) => {
    //         console.log(pais);
    //       });
    //   });

  }

}
