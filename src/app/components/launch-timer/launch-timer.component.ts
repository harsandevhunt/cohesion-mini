import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-launch-timer',
  templateUrl: './launch-timer.component.html',
  styleUrls: ['./launch-timer.component.scss']
})
export class LaunchTimerComponent implements OnInit {
  @Input() launchTime: string;
  remainingDays = 0;
  remainingHours = 0;
  remainingMins = 0;
  remainingSecs = 0;


  constructor() { }

  ngOnInit(): void {
    // Maximum run time
    const timerMaxLimit = moment(this.launchTime).diff(moment(), 's');
    interval(1000).pipe(take(timerMaxLimit)).subscribe((i) => {
      this.fetchCountdownTimer();
      if (i === timerMaxLimit) {
        const resp = confirm('Yaay! Our webpage has been Launched! Please click ok to visit!');
        // To see the launched page, Refreshing current page
        if (resp) {
          window.location.hostname = '';
        }
      }
    });
  }

  fetchCountdownTimer(): void {
    const countDownObj = moment.duration(moment(this.launchTime).diff(moment()));
    this.remainingDays = countDownObj.get('d');
    this.remainingHours = countDownObj.get('h');
    this.remainingMins = countDownObj.get('m');
    this.remainingSecs = countDownObj.get('s');
  }

}
