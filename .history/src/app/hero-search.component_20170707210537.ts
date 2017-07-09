import { Component, OnInit } from '@angular/core';
import {Router } from @'angular/router';

import { Observable} from 'rxjs/Observable';
import { Subject }  from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService} from './hero-search.service';
import {Hero} from './hero';

@Component ({
    selector: 'hero-search',
    templateUrl: './hero-search.component',
    style

})
