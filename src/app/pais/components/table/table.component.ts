import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.Interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})

export class TableComponent  {

  @Input() paisestabla:Country[] = [];


}
