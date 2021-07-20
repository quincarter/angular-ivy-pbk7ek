import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: string;
  moneyValue: string;
  percentValue: string;
  firstAndLastName: string;
  error: string;

  // label for the title case input using the titlecase pipe
  titleCaseStringExample =
    'enter something here and it will always capitalize the first letter in each word';

  // Only checks to see if the date is blank -- that indicates an error from the pipe
  updateDate($event) {
    this.error = $event === '' ? 'Invalid Date Entered' : '';
    return $event;
  }
}
