import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  
  @Input() heroe:any = {};
  @Input() id:number;

  @Output() heroeSelect: EventEmitter<number>;

  constructor( private router:Router ){
    this.heroeSelect = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    //this.heroeSelect.emit( this.id );
    this.router.navigate(['/heroe', this.id]);
  }

}
