import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-park',
  templateUrl: './time-park.page.html',
  styleUrls: ['./time-park.page.scss'],
})
export class TimeParkPage implements OnInit {
  hours: string = '04';
  minutes: string = '00';
  seconds: string = '00';

  countdownInterval: any;

  ngOnInit() {
    const totalTimeInSeconds = 4 * 60 * 60; // 4 horas en segundos
    this.startCountdown(totalTimeInSeconds);
  }

  startCountdown(seconds: number) {
    this.countdownInterval = setInterval(() => {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      this.hours = this.formatTime(hrs);
      this.minutes = this.formatTime(mins);
      this.seconds = this.formatTime(secs);

      if (seconds <= 0) {
        clearInterval(this.countdownInterval);
      } else {
        seconds--;
      }
    }, 1000);
  }

  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  constructor() { }

}
