import { Component, Input } from 'angular2/core';
import { Hero } from './hero';


@Component({
	selector: 'my-hero-detail',
	template: `
	
      <div *ngIf="hero">
        <h1>{{title}}</h1>
          <h2>{{hero.name}} details!</h2>
          <div>
            <label>Id: </label>{{hero.id}}
          </div>
          <div>
            <label>Name: </label>{{hero.name}}
            <input [(ngModel)]="hero.name" placeholder="name">
          </div>
        </div>
	`
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}

