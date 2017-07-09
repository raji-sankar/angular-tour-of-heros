import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})



export class HeroesComponent implements OnInit { 
  title = 'Tour of Heroes'; 
  heroes: Hero[];
  constructor(
      private router: Router,
      private heroService: HeroService,
      private titleService: Title) { }
  
  getHeroes(): void {
    this.titleService.setTitle('List of Heroes');
    // this.heroes = this.heroService.getHeroes();
    //slow impl
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  } 

  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
      name = name.trim();
      if (!name) { return;}
      this.heroService.create(name)
        .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
        })
  }
}




