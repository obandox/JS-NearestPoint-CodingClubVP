

var Point = function(a, b){
    this.x = a;
    this.y = b;
};

Point.prototype.equal = function(other){
	console.log(this);
	console.log("------");
	console.log(other);
	return other.x == this.x &&  other.y == this.y;
};

Point.randomNum = function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};

Point.singleRandom = function(min, max){
	var self = Point;
	return new self(self.randomNum(min.x, max.x),self.randomNum(min.y, max.y));
};

Point.listsRandom = function(min, max){
	var self = Point;
	var number = self.randomNum(2, 100);
	var points = [];
	for (var i = number; i >= 0; i--) {
		points.push(self.singleRandom(min, max));
	};
	return points;
};

module.exports = Point;