import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{ 

    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private titleService: Title){ }

    ngOnInit(): void {
        this.titleService.setTitle("Angular- Heroes Dashboard");
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}