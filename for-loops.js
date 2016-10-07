// increment by 10

for (var i = 5; i < 120; i += 10) {
	console.log('Current value is ' + i);
}

// decrement by division

for (var j = 4097; j >= 1; j = j / 2) {
	console.log('Current value is ' + Math.floor(j));
}

// array iteration

var presidents = ['George Washington', 
				  'John Adams',
				  'Thomas Jefferson', 
				  'James Madison',
				  'James Monroe',
				  'John Quincy Adams',
				  'Andrew Jackson',
				  'Martin Van Buren'];

for (var name = 1; name <= presidents.length; name++) {
	console.log("President #" + name + " was " + presidents[name - 1]);
}

// object iteration


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (key in antSpecies) {
	console.log('antSpecies.' + key);
}
