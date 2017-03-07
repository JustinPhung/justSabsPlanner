import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {colors} from "../../assets/color";
import {Subject} from "rxjs";
import {CalendarEventTimesChangedEvent, CalendarEvent} from "angular-calendar";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  view: string = 'week';
  viewDate: Date = new Date();

  constructor(public navCtrl: NavController) {

  }

  events: CalendarEvent[] = [{
    title: 'Resizable event',
    color: colors.yellow,
    start: new Date(),
    end: new Date(), // an end date is always required for resizable events to work
    resizable: {
      beforeStart: true, // this allows you to configure the sides the event is resizable from
      afterEnd: true
    }
  }, {
    title: 'A non resizable event',
    color: colors.blue,
    start: new Date(),
    end: new Date(),
  }];

  refresh: Subject<any> = new Subject();

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

}
