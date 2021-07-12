import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.Interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})

export class PorRegionComponent {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  activarRegion(region:string){

    if(region === this.regionActiva){return;}

    this.regionActiva = region;

    this.paisService.buscarPaisesPorRegion(region).subscribe(pais => {
      this.paises = pais;
    });

  }


}
