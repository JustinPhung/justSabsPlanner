import {Component, ChangeDetectorRef} from "@angular/core";
import {NavController} from "ionic-angular";
import {colors} from "../../assets/color";
import {Subject} from "rxjs";
import {CalendarEventTimesChangedEvent, CalendarEvent} from "angular-calendar";


@Component( {
                selector: 'page-home',
                templateUrl: 'home.html'
            } )
export class HomePage {

    editMode: boolean = false;
    view: string = 'week';
    viewDate: Date = new Date();
    event: CalendarEvent = {title: "", color: colors.yellow, start: new Date(), end: new Date()};
    colors: any = {"yellow": colors.yellow, "blue": colors.blue, "red": colors.red};

    constructor( public navCtrl: NavController, public changeDetectorRef: ChangeDetectorRef) {

    }

    events: CalendarEvent[] = [{
        title: 'Resizable event',
        color: colors.yellow,
        start: new Date(),
        end: new Date(), // an end date is always required for resizable events to work
    }, {
        title: 'A non resizable event',
        color: colors.blue,
        start: new Date(),
        end: new Date(),
    }];

    refresh: Subject<any> = new Subject();

    eventTimesChanged( {event, newStart, newEnd}: CalendarEventTimesChangedEvent ): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    addEvent() {
        this.events.push(this.event);
        this.event = {title: "", color: colors.yellow, start: new Date(), end: new Date()};
        this.toggleEditMode();
        console.log(this.events);
        this.refresh.next();
    }

    setEventStartTime(event: Event){
        this.event.start = (<HTMLInputElement>event.srcElement).valueAsDate;
    }

    setEventEndTime(event: Event){
        this.event.end = (<HTMLInputElement>event.srcElement).valueAsDate;
    }


}
