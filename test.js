var assert 		 = require('assert');
var NearestPoint = require('./near_point/lib/calculateNearestPoint');
var Point 		 = require('./src/Point');


//tests
//reference (0,0), points[(2,99),(40,44),(29,88)]
describe('reference (0,0), points[(2,99),(40,44),(29,88)]', function() {
  it('should ::do::', function () {
    assert(new Point(40,44).equal( NearestPoint(new Point(0,0), [new Point(2,99), new Point(40,44), new Point(29,88)]) ));
  });
});


//reference (50,50), points[(2,99),(40,44),(29,88)]
describe('reference (50,50), points[(2,99),(40,44),(29,88)]', function() {
  it('should ::do::', function () {
    assert(new Point(40,44).equal( NearestPoint(new Point(50,50), [new Point(2,99), new Point(40,44), new Point(29,88)]) ));
  });
});


//reference 2Q ( 50,-50)
describe('reference 2Q ( 50,-50)', function() {
  it('should ::do::', function () {
    assert(new Point(40,44).equal( NearestPoint(new Point(50,-50), [new Point(2,99), new Point(40,44), new Point(29,88)]) ));
  });
});


//reference 3Q (-50,-50)
describe('reference 3Q (-50,-50)', function() {
  it('should ::do::', function () {
    assert(new Point(40,44).equal( NearestPoint(new Point(-50,-50), [new Point(2,99), new Point(40,44), new Point(29,88)]) ));
  });
});

//reference 4Q (-50, 50)
describe('reference 4Q (-50, 50)', function() {
  it('should ::do::', function () {
    assert(new Point(2,99).equal( NearestPoint(new Point(-50,50), [new Point(2,99), new Point(40,44), new Point(29,88)]) ));
  });
});
