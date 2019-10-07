import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../servicios/heroes.services";
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  
  heroes:Heroe[] = [];
  term:string;
  

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
    private router:Router ){}

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.term = params['term'];
      this.heroes = this._heroesService.buscarHeroes( params['term'] );
    });
  }

  verHeroe( id:number ){
    
    this.router.navigate(['/heroe', id ] );
  }
}
