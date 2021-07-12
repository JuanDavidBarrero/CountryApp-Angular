import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:EventEmitter<String> = new EventEmitter();
  @Output() onDebounce:EventEmitter<String> = new EventEmitter();

  @Input() placeHolder:String = 'Buscar país...'

  debouncer: Subject<String> = new Subject;
  termino:String = '';

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

  ngOnInit(){
    this.debouncer.pipe(debounceTime(300)).subscribe(valor =>this.onDebounce.emit(valor));
  }


}
