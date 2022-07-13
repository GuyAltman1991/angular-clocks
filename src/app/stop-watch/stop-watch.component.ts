import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css'],
})
export class StopWatchComponent {
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
  constructor() {
    this.interval = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  setTime(): void {
    this.time.milliseconds++;
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
  handleInterval(command: string) {
    if (command === 'stop') return clearInterval(this.interval);
    setInterval(() => {
      console.log('in');
    }, 1000);
  }

  reset() {
    this.time.hours = 0;
    this.time.minutes = 0;
    this.time.seconds = 0;
    this.time.milliseconds = 0;
  }
  zero() {
    if (this.time.seconds < 10) {
      this.time.seconds = 0 + this.time.seconds;
    }
  }
}
