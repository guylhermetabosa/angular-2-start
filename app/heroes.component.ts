// Importação do módulo componente do módulo do angular

import { OnInit } from 'angular2/core';
import { Component } from 'angular2/core';
import { Router} from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


// Decorators, uma feature do ES7 mas já disponível 
// @params um objeto JS
// diz ao angular qual template usar e como criar um componente
@Component({
	selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:['app/heroes.component.css'],
  directives:[HeroDetailComponent]
})

// Exportação da classe, -- classe é uma feature do ES6
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
  getHeroes() {

    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}