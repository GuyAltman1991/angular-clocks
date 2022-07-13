import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-watch',
  templateUrl: './timer-watch.component.html',
  styleUrls: ['./timer-watch.component.css'],
})
export class TimerWatchComponent {
  interval: any;
  // test: string = 'yay';
  time: {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  } = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };
  constructor() {}

  setTime(): void {
    if (this.time.milliseconds === 1000) {
      this.time.milliseconds = 0;
      this.time.seconds++;
    }
    if (this.time.seconds === 60) {
      this.time.seconds = 0;
      this.time.minutes++;
    }
    if (this.time.minutes === 60) {
      this.time.minutes = 0;
      this.time.hours++;
    }
  }
}
