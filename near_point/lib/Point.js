module.exports = (function(){
    'use strict';
    var Point = function(a, b){
        var self = this;
        self.x = a;
        self.y = b;
    };

    Point.prototype.equal = function(other){
        return other.x === this.x &&  other.y === this.y;
    };

    Point.randomNum = function(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    };

    Point.singleRandom = function(min, max){
        var self = this;
        return new self(self.randomNum(min.x, max.x),self.randomNum(min.y, max.y));
    };

    Point.listsRandom = function(min, max){
        var self   = Point;
        var number = self.randomNum(2, 100);
        var points = [];
        for (var i = number; i >= 0; i--) {
            points.push(self.singleRandom(min, max));
        };
        return points;
    };
    return Point;
})();

