import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: string;
  moneyValue: string;
  error: string;

  // Only checks to see if the date is blank -- that indicates an error from the pipe
  updateDate($event) {
    this.error = $event === '' ? 'Invalid Date Entered' : '';
    return $event;
  }
}
