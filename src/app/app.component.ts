import { Component } from '@angular/core';
import {UserService} from 'ng-tla-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(us:UserService){
    console.log(us.foo())
  }
}
