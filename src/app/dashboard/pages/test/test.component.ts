import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs/observable/timer';
import { interval } from 'rxjs/observable/interval';
import { switchMap, take, map,combineAll, concat } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { merge } from 'rxjs/observable/merge';

import { mapTo } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
//emit immediately, then every 5s
const source = timer(0, 5000);
//switch to new inner observable when source emits, emit items that are emitted
const example = source.pipe(switchMap((i) => interval(500).pipe(map(x=> 'test '+x+' '+i))));
//output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
const subscribe = example.subscribe(val => console.log(val));

  }

}
