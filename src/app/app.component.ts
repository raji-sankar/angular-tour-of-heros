import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
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




