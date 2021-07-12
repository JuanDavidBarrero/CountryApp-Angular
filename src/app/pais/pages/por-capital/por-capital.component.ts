import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.Interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent  {

  constructor(private paisService:PaisService) { }

  capitales:Country[] = [];
  hayError:Boolean = false;
  termino:String = '';

  sugerenia(termino:String){

  }

  buscar(termino:String){
    this.hayError=false;
    this.termino = termino;
    
    this.paisService.burcarCapital(termino).subscribe(capitales => {
      this.capitales = capitales;
    }, 
    err => {
      this.hayError=true;
    })
  }



}
