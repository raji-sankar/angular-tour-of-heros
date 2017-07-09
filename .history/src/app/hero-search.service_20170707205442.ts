import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Hero} from './hero';


@Injectable()
export class HeroSearchService {

    constructor (private http: Http){ }

    search(term: string){
        return this.http.get('api/heros/?name=${term}')
        .map(response => response.json().data as Hero[]);
    }
}