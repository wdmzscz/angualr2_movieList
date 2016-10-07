import { Component } from '@angular/core';
import {movieList} from 'movieList';
@Component({
  selector: 'my-app',
  templateUrl: 'app/table.component.html'
})
export class AppComponent { 
 movieLists: movieList[]=[{
 	"movie" : "civil war"
 },{
 	"movie": "avatar"
 },{
 	"movie" : "x-men"
 }];
 selectedMovie(){
 	alert("your movie selected");
 }
}
