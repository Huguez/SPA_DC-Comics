import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../servicios/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
   
  heroes:Heroe[] = [];

  constructor(
    private _heroesServices: HeroesService,
    private router:Router
   ){}

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe( id:number ){
    this.router.navigate(['/heroe', id ] );
  }
}
