import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../servicios/heroes.services";

@Component({
  selector: 'app-buscador',
  templateUrl: '../heroe/heroe.component.html'
})
export class BuscadorComponent implements OnInit {
  
  heroes:Heroe[] = [];
  heroe:Heroe;

  constructor( private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes( params['term'] );
      this.heroe = this.heroes[0];  
    });
    //this.heroe.casa = "../../" + this.heroe.casa + ".png";
    //console.log( this.heroe.casa );
  }

}
