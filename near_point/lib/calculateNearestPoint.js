
module.exports = (function(){
	'use strict';
	return function(ref, points){
		
		var calcDistance = function(v1, v2){
			var x1 = v1.x;
			var y1 = v1.y;
			var x2 = v2.x;
			var y2 = v2.y;
			return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
		};
		
		var minDistance = Number.MAX_VALUE;
		var minIndex   = 0;
		for (var index = points.length - 1; index >= 0; index--) {
			var distance = calcDistance(ref, points[index]);
			if(distance < minDistance){
				minIndex    = index;
				minDistance = distance;
			}
		};
		return points[minIndex];
	};
})();