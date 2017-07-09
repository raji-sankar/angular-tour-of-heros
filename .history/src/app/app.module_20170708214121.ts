import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }  from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroSearchService } from './hero-search.service';

import { AppRoutingModule }     from './app-routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full',},
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component:HeroesComponent}

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ Title, HeroService, HeroSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
