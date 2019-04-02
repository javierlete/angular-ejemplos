import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'blue';

  heroes = [ { name: 'uno' }, { name: 'dos' } ];

  setColor(color: string) {
    this.color = color;
  }
}
