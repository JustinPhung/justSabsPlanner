import {Component} from "@angular/core";
import {NavController, ModalController} from "ionic-angular";

@Component( {
                selector: 'shopping',
                templateUrl: 'shoppingList.html'
            } )
export class ShoppingPage {

    items: Array<string>;
    editMode: boolean = false;
    newInput: string = "";

    constructor( public navCtrl: NavController, public modalCtrl: ModalController ) {

    }

    ngOnInit() {
        this.items = ["apfel", "salat", "birne"];
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
