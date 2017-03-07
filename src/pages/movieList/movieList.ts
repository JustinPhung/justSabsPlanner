import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component( {
                selector: 'movieList',
                templateUrl: 'movieList.html'
            } )
export class MoviePage {

    items: Array<string>;
    newInput: string = "";

    constructor( public navCtrl: NavController ) {

    }

    ngOnInit() {

        this.items = ["Film1", "Film2", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3",
                      "Film3", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3", "Film3"];
    }

    addEntry() {
        if ( this.newInput != "" ) {
            console.log( this.newInput );
            this.items.push( this.newInput );
            this.newInput = "";
        }

    }

    remove(index: number){
        this.items.splice(index, 1);
    }

}
