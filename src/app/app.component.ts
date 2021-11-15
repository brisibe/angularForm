import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForm';
  name = this.holla()


  holla() {
    return this.title + " " + "holla"
  }
}
