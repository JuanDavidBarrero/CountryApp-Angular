import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../../interfaces/pais.Interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})

export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(private activateRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( ({id}) => {
 
      this.paisService.getPaisporAlpha(id).subscribe( pais => {
        // console.log(pais);
        this.pais = pais;
      });

    });
  }

}
