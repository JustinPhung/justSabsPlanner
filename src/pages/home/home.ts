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
    event: CalendarEvent = {
        title: "", color: colors.yellow, start: new Date(), end: new Date(), draggable: true
    };
    colors: any = {"yellow": colors.yellow, "blue": colors.blue, "red": colors.red};


    constructor( public navCtrl: NavController, public changeDetectorRef: ChangeDetectorRef ) {

    }

    events: CalendarEvent[] = [{
        title: 'Resizable event',
        color: colors.yellow,
        start: new Date(),
        end: new Date(), // an end date is always required for resizable events to work
        draggable: true
    }, {
        title: 'A non resizable event',
        color: colors.blue,
        start: new Date(),
        end: new Date(),
        draggable: true
    }];

    refresh: Subject<any> = new Subject();

    eventTimesChanged( {event, newStart, newEnd}: CalendarEventTimesChangedEvent ): void {
        // this.events.forEach((rEvent, index) =>{
        //     if( rEvent == event){
        //         this.events.splice(index, 1);
        //     }
        // })
        console.log( newStart );
        console.log( newEnd );
        event.start = newStart;
        event.end = newEnd;
        // this.events.push(event)
        this.refresh.next();
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    addEvent() {
        this.events.push( this.event );
        this.event = {title: "", color: colors.yellow, start: new Date(), end: new Date(), draggable: true};
        this.toggleEditMode();
        console.log( this.events );
        this.refresh.next();
    }

    setEventStartTime( event: Event ) {
        this.event.start = (<HTMLInputElement>event.srcElement).valueAsDate;
    }

    setEventEndTime( event: Event ) {
        this.event.end = (<HTMLInputElement>event.srcElement).valueAsDate;
    }
    changeColor(event: Event){
        switch((<HTMLSelectElement>event.srcElement).value){
            case "yellow": this.event.color = colors.yellow;
                return;
            case "blue": this.event.color = colors.blue;
                return;
            case "red": this.event.color = colors.red;
                return;
            default:
                this.event.color = colors.yellow;
                return
        }
    }

    remove(event:CalendarEvent ){
        this.events.forEach((rEvent, index)=>{
            if(rEvent == event){
                this.events.splice(index, 1);
            }
        })
        this.refresh.next();

    }


}
