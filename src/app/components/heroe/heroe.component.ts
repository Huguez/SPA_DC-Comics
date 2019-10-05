import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.services';
import { Location } from '@angular/common';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  
  public heroe:Heroe;
  public casa:string = "assets/img/";

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _location:Location
  ){
    this.activatedRoute.params.subscribe( params => { 
      this.heroe = this._heroesService.getHeroe( params['id'] );  
      this.casa += this.heroe.casa+".png";
      
     });
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
  }
}