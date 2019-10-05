import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.services';
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  arrayHeroe:Heroe[] = [];

  constructor( private _router:Router, private _heroesService:HeroesService ){}

  ngOnInit(){}

  buscarHeroe( value:string ){
    /*
    let termino:string = value;
    this.arrayHeroe = ( termino == "" ? [] : this._heroesService.buscarHeroes( termino ) );
    console.log( this.arrayHeroe );
    */
    this._router.navigate(['/buscar', value ]);

  }
}