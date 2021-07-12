import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.Interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',

})
export class PorPaisComponent {

  termino: String = "";
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar( termino:String ) {

    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPais(termino).subscribe(paises => {

      console.log(paises);
      this.paises = paises;

    }, err => {

      this.hayError= true;
      this.paises = []

    });
  }

  sugerenia(termino:String){
    this.hayError=false;
  }

}
