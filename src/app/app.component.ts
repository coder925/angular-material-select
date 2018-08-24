import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected: number = 1;

  getSelectedType(): string {
    return typeof this.selected;
  }
}
