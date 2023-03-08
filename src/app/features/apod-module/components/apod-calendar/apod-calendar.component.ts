import { Component } from '@angular/core';
import * as moment from 'moment';
import {
  Duration,
  Moment
} from 'moment';

@Component({
  selector: 'app-apod-calendar',
  templateUrl: './apod-calendar.component.html',
  styleUrls: ['./apod-calendar.component.scss']
})
export class ApodCalendarComponent {

  currentMonth: number;
  currentDate: Date;

  monthStart: Moment;
  monthStartDayOfWeek: number;
  monthEnd: Moment;
  daysInMonth: number;
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  totalTiles: number = 0;
  tiles: unknown[] = [];

  constructor() {
    this.currentMonth = moment().month();
    this.currentDate = moment().toDate();
    this.monthStart = moment(this.currentDate).startOf('month');
    this.monthStartDayOfWeek = moment(this.monthStart).weekday();
    this.monthEnd = moment(this.currentDate).endOf('month');
    this.daysInMonth = moment.duration(this.monthEnd.diff(this.monthStart)).days() + 1;
    this.totalTiles = this.monthStartDayOfWeek + this.daysInMonth;
    this.tiles = new Array(this.totalTiles);
  }
}
