import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {MoviePage} from "../movieList/movieList";
import {ShoppingPage} from "../shoppingList/shoppingList";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ShoppingPage;
  tab3Root: any = MoviePage;

  constructor() {

  }
}
