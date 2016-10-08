import { Component } from '@angular/core';
import { movieList } from "./movieList";
@Component({
  selector: 'my-app',
  templateUrl: 'app/table.component.html',
  styleUrls:['app/styles.css']
})
export class myShopComponent { 
	movieLists: movieList[]=[{
		"movie":"avatar",
		"img" : "assets.vg247.com/current//2015/09/one_piece_burning_blood.jpg"
	},{
		"movie":'civil war',
		"img" : "de7i3bh7bgh0d.cloudfront.net/2016/07/05/16/50/17/0ce17b10-565d-4284-a9d0-617d26ee339b/VizBlog_OnePiece.jpg"
	},{
		"movie":'x-men',
		"img" : "static.bandainamcogames.eu/sites_products/onepiece/uploads/2016/03/home-logo_en-1-1.png"
	}];
	public cart =[];
	public recentMovie=[];
	selectedMovie(movieList){
		this.recentMovie=movieList.movie;
		alert(movieList.movie + " the movie had already added");
		this.cart.push(movieList.movie);
	}



}
