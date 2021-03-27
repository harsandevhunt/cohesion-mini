import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  launchTime: string;
  constructor() {
  }

  ngOnInit(): void {
    // Mocking Launch Time as 10th forthcoming day
    this.launchTime = moment().utc().add(10, 'd').format();
  }

}
