"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var myShopComponent = (function () {
    function myShopComponent() {
        this.movieLists = [{
                "movie": "avatar",
                "img": "assets.vg247.com/current//2015/09/one_piece_burning_blood.jpg"
            }, {
                "movie": 'civil war',
                "img": "de7i3bh7bgh0d.cloudfront.net/2016/07/05/16/50/17/0ce17b10-565d-4284-a9d0-617d26ee339b/VizBlog_OnePiece.jpg"
            }, {
                "movie": 'x-men',
                "img": "static.bandainamcogames.eu/sites_products/onepiece/uploads/2016/03/home-logo_en-1-1.png"
            }];
        this.cart = [];
    }
    myShopComponent.prototype.selectedMovie = function (movieList) {
        this.recentMovie = movieList.movie;
        alert(movieList.movie + " the movie had already added");
        this.cart.push(movieList.movie);
    };
    myShopComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/table.component.html',
            styleUrls: ['app/styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], myShopComponent);
    return myShopComponent;
}());
exports.myShopComponent = myShopComponent;
//# sourceMappingURL=app.component.js.map