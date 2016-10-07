import { Component } from '@angular/core';
import {movieList} from "./movieList";
@Component({
  selector: 'my-app',
  templateUrl: 'app/table.component.html'
})
export class AppComponent { 
	movieLists: movieList[]=[{
		"movie":"avatar"
	},{
		"movie":'civil war'
	},{
		"movie":'x-men'
	}]
}
