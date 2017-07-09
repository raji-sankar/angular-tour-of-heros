import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';

import {HeroService} from './hero.service';
import {Hero} from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private titleService: Title,
    ){}

    hero: Hero;

    ngOnInit(): void {
        this.titleService.setTitle("Hero Detail");
        this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);

    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}