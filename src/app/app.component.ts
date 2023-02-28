import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentNavigationValue: string = 'recipes';

  onNavValueChanged(navValue: string) {
    this.currentNavigationValue = navValue;
  }
}
