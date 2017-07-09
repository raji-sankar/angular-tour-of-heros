import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>

  <ul>
    <li><a (click)="setTitle( 'Good morning!' )">Good morning</a>.</li>
    <li><a (click)="setTitle( 'Good afternoon!' )">Good afternoon</a>.</li>
    <li><a (click)="setTitle( 'Good evening!' )">Good evening</a>.</li>
  </ul>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
  })



export class AppComponent implements OnInit{ 

  public constructor(private titleService: Title) { }
  title = 'Tour of Heroes'; 

  ngOnInit(): void {
    this.titleService.setTitle('Angular Tour of Heroes');
  }

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }
}




